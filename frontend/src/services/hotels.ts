import axiosInstance from "@/services/axios.ts";
import {Hotel, HotelInfo} from "@/types/hotel";
import {HotelParamsProps} from "@/hooks/useHotels.ts";

const getHotels = async (params?: HotelParamsProps): Promise<Hotel[]> => {
    try {
        const res = await axiosInstance.get(`/hotels`, {params});

        return res.data
    } catch (err: any) {
        return err.message;
    }
}

const getHotelById = async (hotelId: number): Promise<HotelInfo> => {
    try {
        const res = await axiosInstance.get(`/hotels/${hotelId}`);

        return res.data
    } catch (err: any) {
        return err.message;
    }
}

export const HotelsService = {
    getHotels,
    getHotelById,
}
