import {Continent} from "@/types/continent";
import axiosInstance from "@/services/axios.ts";

const getAllContinents = async (): Promise<Continent[]> => {
    try {
        const res = await axiosInstance.get("/continents");

        return res.data
    } catch (err: any) {
        return err.message
    }
}

export const ContinentService = {
    getAllContinents,
}
