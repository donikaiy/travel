import type {RowDataPacket} from "mysql2";

export type TourProgram = {
    tourProgramId: number,
    tourId: number,
    day: number,
    title: string,
    description: string,
}

export type TourProgramDb = RowDataPacket & {
    tour_program_id: number,
    tour_id: number,
    day: number,
    title: string,
    description: string,
}
