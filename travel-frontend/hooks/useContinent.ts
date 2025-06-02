import {useQuery} from "@tanstack/react-query";
import {ContinentService} from "@/services/continents.ts";

export const useGetAllContinents = () => {
    return useQuery({
        queryKey: ["continents"],
        queryFn: ContinentService.getAllContinents,
    })
}
