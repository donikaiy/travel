import * as React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home"
import Hotels from "./pages/hotels"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Flights from "@/pages/flights.tsx";
import Destinations from "@/pages/destinations.tsx";
import Country from "@/pages/country.tsx";
import Hotel from "@/pages/hotel.tsx";
import Restaurants from "@/pages/restaurants.tsx";
import Attractions from "@/pages/attractions.tsx";
import Attraction from "@/pages/attraction.tsx";
import TravelGuide from "@/pages/travelGuide.tsx";
import Tours from "@/pages/tours.tsx";
import Tour from "@/pages/tour.tsx";
import {TravelProvider} from "@/contexts/TravelContext.tsx";
import TravelPlan from "@/pages/travelPlan.tsx";
import {SidebarProvider} from "@/components/ui/sidebar.tsx";
import AdminCities from "@/pages/admin/adminCities.tsx";
import AdminFlights from "@/pages/admin/adminFlights.tsx";
import AdminRestaurants from "@/pages/admin/adminRestaurants.tsx";
import AdminAttractions from "@/pages/admin/adminAttractions.tsx";

const App = () => {
    const queryClient = new QueryClient()

    return (
        <TravelProvider>
                <QueryClientProvider client={queryClient}>
                    <SidebarProvider style={
                        {
                            "--sidebar-width": "15rem",
                            "overflow": "hidden"
                        } as React.CSSProperties
                    }>
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/tours" element={<Tours/>}/>
                                <Route path="/tours/:tourId" element={<Tour/>}/>
                                <Route path="/flights" element={<Flights/>}/>
                                <Route path="/destinations" element={<Destinations/>}/>
                                <Route path="/destinations/:countryId" element={<Country/>}/>
                                <Route path="/hotels" element={<Hotels/>}/>
                                <Route path="/hotels/:hotelId" element={<Hotel/>}/>
                                <Route path="/restaurants" element={<Restaurants/>}/>
                                <Route path="/attractions" element={<Attractions/>}/>
                                <Route path="/attractions/:attractionId" element={<Attraction/>}/>
                                <Route path="/travel-guide" element={<TravelGuide/>}/>
                                <Route path="/travel-plan" element={<TravelPlan/>}/>
                                <Route path="/admin">
                                    <Route index element={<AdminCities/>}/>
                                    <Route path="cities" element={<AdminCities/>}/>
                                    <Route path="flights" element={<AdminFlights/>}/>
                                    <Route path="restaurants" element={<AdminRestaurants/>}/>
                                    <Route path="attractions" element={<AdminAttractions/>}/>
                                </Route>
                            </Routes>
                        </BrowserRouter>
                    </SidebarProvider>
                </QueryClientProvider>
        </TravelProvider>
    )
}

export default App
