import {connection} from "../repository.ts";
import type {Hotel, HotelDb} from "./domain.d.ts";

export type Filters = {
    cityId?: number,
}

const getAllHotels = async (filters: Filters = {}): Promise<Hotel[]> => {
    let query = 'SELECT * FROM hotels WHERE 1=1';
    const params: any[] = [];

    if (filters.cityId !== undefined) {
        query += ' AND city_id = ?';
        params.push(filters.cityId);
    }

    const [results] = await connection.query<HotelDb[]>(query, params);

    return results.map((hotelDb: HotelDb) => {
        const hotel: Hotel = {
            hotelId: hotelDb.hotel_id,
            galleryId: hotelDb.gallery_id,
            cityId: hotelDb.city_id,
            name: hotelDb.name,
            location: hotelDb.location,
            about: hotelDb.about,
            price: hotelDb.price,
            preferredGalleryEntryId: hotelDb.preferred_gallery_entry_id
        }

        return hotel
    });
}

const getHotelById = async (hotelId: number): Promise<Hotel> => {
    const [result] = await connection.execute<HotelDb[]>('SELECT * FROM hotels WHERE hotel_id = ?', [hotelId]);

    if (result.length === 0) {
        throw new Error(`Hotel with id ${hotelId} not found`)
    }

    const hotelDb = result[0] as HotelDb;

    return {
        hotelId: hotelDb.hotel_id,
        galleryId: hotelDb.gallery_id,
        cityId: hotelDb.city_id,
        name: hotelDb.name,
        location: hotelDb.location,
        about: hotelDb.about,
        price: hotelDb.price,
        preferredGalleryEntryId: hotelDb.preferred_gallery_entry_id
    }
}

const getHotelsByCityId = async (cityId: number): Promise<Hotel[]> => {
    const [results] = await connection.execute<HotelDb[]>('SELECT * FROM hotels WHERE city_id = ?', [cityId]);

    return results.map((hotelDb: HotelDb) => {
        const hotel: Hotel = {
            hotelId: hotelDb.hotel_id,
            galleryId: hotelDb.gallery_id,
            cityId: hotelDb.city_id,
            name: hotelDb.name,
            location: hotelDb.location,
            about: hotelDb.about,
            price: hotelDb.price,
            preferredGalleryEntryId: hotelDb.preferred_gallery_entry_id
        }

        return hotel
    });
}

export default {getAllHotels, getHotelById, getHotelsByCityId}

