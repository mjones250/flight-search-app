"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const flights = [
    {
        flightId: 'DA501',
        airline: 'Delta Airlines',
        from: 'CMH',
        to: 'TEB',
        departureTime: '2026-02-01T09:00:00Z',
        arrivalTime: '2026-02-01T11:00:00Z'
    },
    {
        flightId: 'SA742',
        airline: 'Southwest Airlines',
        from: 'CMH',
        to: 'ORD',
        departureTime: '2026-02-01T13:00:00Z',
        arrivalTime: '2026-02-01T15:30:00Z'
    },
    {
        flightId: 'UA310',
        airline: 'United Airlines',
        from: 'TEB',
        to: 'CMH',
        departureTime: '2026-02-01T17:00:00Z',
        arrivalTime: '2026-02-01T19:00:00Z'
    },
    {
        flightId: 'AA351',
        airline: 'American Airlines',
        from: 'TEB',
        to: 'CMH',
        departureTime: '2026-02-01T11:00:00Z',
        arrivalTime: '2026-02-01T13:00:00Z'
    },
    {
        flightId: 'AA401',
        airline: 'American Airlines',
        from: 'CMH',
        to: 'TEB',
        departureTime: '2026-02-01T12:00:00Z',
        arrivalTime: '2026-02-01T14:00:00Z'
    },
    {
        flightId: 'UA254',
        airline: 'United Airlines',
        from: 'CMH',
        to: 'TEB',
        departureTime: '2026-02-01T03:00:00Z',
        arrivalTime: '2026-02-01T05:00:00Z'
    },
    {
        flightId: 'DA722',
        airline: 'Delta Airlines',
        from: 'CMH',
        to: 'ORD',
        departureTime: '2026-02-01T11:00:00Z',
        arrivalTime: '2026-02-01T13:30:00Z'
    },
    {
        flightId: 'SA112',
        airline: 'Southwest Airlines',
        from: 'TEB',
        to: 'CMH',
        departureTime: '2026-02-01T11:00:00Z',
        arrivalTime: '2026-02-01T13:00:00Z'
    }
];
const jsonResponse = (statusCode, body) => ({
    statusCode,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(body)
});
const handler = async (event) => {
    try {
        const airline = event.queryStringParameters?.airline;
        const from = event.queryStringParameters?.from;
        const to = event.queryStringParameters?.to;
        const date = event.queryStringParameters?.date;
        if (!airline && !from && !to && !date) {
            return jsonResponse(400, {
                error: 'Please provide at least one search parameter: airline, from, to, or date'
            });
        }
        const normalizedFrom = from?.toUpperCase();
        const normalizedTo = to?.toUpperCase();
        const results = flights.filter((f) => {
            const matchesAirline = airline ? f.airline === airline : true;
            const matchesFrom = from ? f.from === normalizedFrom : true;
            const matchesTo = to ? f.to === normalizedTo : true;
            const matchesDate = date ? f.departureTime.startsWith(date) : true;
            return matchesAirline || matchesFrom || matchesTo || matchesDate;
        });
        // 1. Sort by date
        results.sort((a, b) => {
            return new Date(a.departureTime).getTime() - new Date(b.departureTime).getTime();
        });
        // 2. Group by airline
        const grouped = results.reduce((acc, flight) => {
            if (!acc[flight.airline]) {
                acc[flight.airline] = [];
            }
            acc[flight.airline].push(flight);
            return acc;
        }, {});
        return jsonResponse(200, grouped);
    }
    catch (err) {
        return jsonResponse(500, { error: 'Internal server error' });
    }
};
exports.handler = handler;
