import * as React from "react";
import {Flight} from "@/types/flight";
import {Hotel} from "@/types/hotel";
import {RestaurantWithRating} from "@/types/restaurant";
import {Attraction} from "@/types/attraction";
import {PropsWithChildren} from "react";

type TravelContextProps = {
    selectedFlights: Flight[],
    setSelectedFlights: (flights: Flight[]) => void,

    selectedHotels: Hotel[],
    setSelectedHotels: (hotels: Hotel[]) => void,

    selectedRestaurants: RestaurantWithRating[],
    setSelectedRestaurants: (restaurants: RestaurantWithRating[]) => void,

    selectedAttractions: Attraction[],
    setSelectedAttractions: (attractions: Attraction[]) => void,
}

const TravelContext = React.createContext<TravelContextProps | undefined>(undefined)

export const TravelProvider = ({children}: PropsWithChildren) => {
    const [selectedFlights, setSelectedFlights] = React.useState<Flight[]>([]);
    const [selectedHotels, setSelectedHotels] = React.useState<Hotel[]>([]);
    const [selectedRestaurants, setSelectedRestaurants] = React.useState<RestaurantWithRating[]>([]);
    const [selectedAttractions, setSelectedAttractions] = React.useState<Attraction[]>([]);

    return (
        <TravelContext.Provider value={{
            selectedFlights,
            setSelectedFlights,
            selectedHotels,
            setSelectedHotels,
            selectedRestaurants,
            setSelectedRestaurants,
            selectedAttractions,
            setSelectedAttractions
        }}>
            {children}
        </TravelContext.Provider>
    )
}

export const useTravelPlan = () => {
    const context = React.useContext(TravelContext);

    if (!context) {
        throw new Error("useTravel must be used within a TravelProvider");
    }

    return context;
}
