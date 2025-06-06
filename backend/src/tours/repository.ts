import type {Tour, TourDb} from "./domain.d.ts";
import {connection} from "../repository.ts";

const getAllTours = async (): Promise<Tour[]> => {
    const [results] = await connection.query<TourDb[]>('SELECT * FROM tours')

    return results.map((tourDb: TourDb) => {
        const tour: Tour = {
            tourId: tourDb.tour_id,
            cityId: tourDb.city_id,
            imageUrl: tourDb.image_url,
            name: tourDb.name,
            daysNights: tourDb.days_nights,
            description: tourDb.description,
            highlights: tourDb.highlights,
        }

        return tour
    })
}

const getTourById = async (tourId: number): Promise<Tour> => {
    const [result] = await connection.execute<TourDb[]>('SELECT * FROM tours WHERE tour_id = ?', [tourId])

    if (result.length === 0) {
        throw new Error(`Tour with id ${tourId} not found`)
    }

    const tourDb = result[0] as TourDb;

    return {
        tourId: tourDb.tour_id,
        cityId: tourDb.city_id,
        imageUrl: tourDb.image_url,
        name: tourDb.name,
        daysNights: tourDb.days_nights,
        description: tourDb.description,
        highlights: tourDb.highlights,
    }
}

export default {getAllTours, getTourById}
