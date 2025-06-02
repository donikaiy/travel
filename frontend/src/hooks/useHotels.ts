import {useQuery} from "@tanstack/react-query";
import {HotelsService} from "@/services/hotels.ts";

export type HotelParamsProps = {
    cityId?: number,
}

export const useGetHotels = (params?: HotelParamsProps) => {
    return useQuery({
        queryKey: ['hotels', params || {}],
        queryFn: () => HotelsService.getHotels(params),
    })
}

export const useGetHotelById = (hotelId: number) => {
    return useQuery({
        queryKey: ['hotels', hotelId],
        queryFn: () => HotelsService.getHotelById(hotelId),
    })
}
