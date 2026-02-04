# Frontend

This is the React + Vite frontend for the Flight Search application. It provides a clean UI for searching flights by airline, origin, destination, and date. Results are fetched from the backend API, sorted by departure time, and displayed grouped by airline.

## Tech Stack

- React
- TypeScript (TSX)
- Vite
- Fetch API
- CSS


## Architecture

-  Pages — top‑level screens that compose the UI
-  Components — reusable UI components
-  Hooks — stateful logic and data fetching
-  Services — API communication
-  Types — shared TypeScript interfaces and models

This structure keeps UI, logic, and data concerns separated.

## Set Up and Installation 

1. Install dependencies
- npm install
2. Start the development server
- npm run dev
3. The app will run at http://localhost:5173

### API Configuration

- The frontend communicates with the backend via HTTP requests:
GET /flights?from=XXX&to=YYY&date=YYYY-MM-DD

### Build for production

- npm run build