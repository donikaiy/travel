import {Country} from "@/types/country";

export type Continent = {
    continentId: number,
    name: string,
    imageUrl: string,
    countries: Country[]
}
