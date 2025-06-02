import express from "express";
import type {Request, Response} from "express";
import {createFlight, deleteFlightById, getAllFlights, getRoundTrip, updateFlightById} from "./service.ts";

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const flights = await getAllFlights()

        res.json(flights)
    } catch (err: any) {
        res.status(500).json({error: err.message})
    }
})

router.get('/round-trip', async (req: Request, res: Response) => {
    try {
        const roundTrip = await getRoundTrip({
            departureCityId: req.query.departureCityId ? Number(req.query.departureCityId) : undefined,
            destinationCityId: req.query.destinationCityId ? Number(req.query.destinationCityId) : undefined,
            departAt: req.query.departAt ? String(req.query.departAt) : undefined,
            returnAt: req.query.returnAt ? String(req.query.returnAt) : undefined
        });

        res.json(roundTrip)
    } catch (err: any) {
        res.status(500).json({error: err.message})
    }
})

router.post('/', async (req: Request, res: Response) => {
    try {
        const newFlight = await createFlight(req.body.originCityId, req.body.destinationCityId, req.body.departAt, req.body.arriveAt, req.body.numberOfStops, req.body.price, req.body.imageUrl, req.body.airline)
        res.status(201).json(newFlight)
    } catch (err: any) {
        res.status(500).json({error: err.message})
    }
})

router.delete('/', async (req: Request, res: Response) => {
    try {
        await deleteFlightById(Number(req.body.flightId))
        res.status(201).json({message: "Flight deleted."})
    } catch (err: any) {
        res.status(500).json({error: err.message})
    }
})

router.put('/', async (req: Request, res: Response) => {
    try {
        await updateFlightById(req.body.flightId, req.body.originCityId, req.body.destinationCityId, req.body.departAt, req.body.arriveAt, req.body.numberOfStops, req.body.price, req.body.imageUrl, req.body.airline)
        res.status(201).json({message: "Flight updated."})
    } catch (err: any) {
        res.status(500).json({error: err.message})
    }
})

export default router
