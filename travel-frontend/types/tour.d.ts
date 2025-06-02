import {Hotel} from "@/types/hotel";
import {Restaurant} from "@/types/restaurant";
import {Attraction} from "@/types/attraction";

export type TourInfo = {
    tourId: number,
    cityId: number,
    imageUrl: string,
    name: string,
    daysNights: string,
    description: string,
    highlights: string,
    rating?: number,
};

export type Tour = TourInfo & {
    tourProgram: TourProgram[],
    hotels?: Hotel[],
    restaurants?: Restaurant[],
    attractions?: Attraction[]
}

export type TourProgram = {
    tourProgramId: number,
    tourId: number,
    day: number,
    title: string,
    description: string,
}
