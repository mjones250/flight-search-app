# Overview

A full‑stack flight search platform built with a React + Vite + TypeScript frontend and a serverless AWS Lambda + API Gateway backend. Users can search flights by airline, origin, destination, and date. Results are sorted by departure time and grouped by airline

## Setup

1. Clone the repo:
- git clone
- cd flight-search

2. Frontend 
- cd frontend
- npm install
- npm run dev
Runs at http://localhost:5173
Update API URL in src/services/flightApi.ts

3. Backend
- cd backend
- npm install
Deploy using AWS Console

## Testing

- Fronted
npm run type-check
npm run build

- Backend
curl "https://mwr3d41lej.execute-api.us-east-2.amazonaws.com/prd/flights?from=CMH&to=TEB&date=2026-02-01"

