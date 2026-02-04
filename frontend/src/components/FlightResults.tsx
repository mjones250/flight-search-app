import { Flight } from '../types/flight';
import FlightCard from './FlightCard';

type Props = {
  flights: Record<string, Flight[]>; // grouped by airline
};

export default function FlightResults({ flights }: Props) {
  if (!flights || Object.keys(flights).length === 0) {
    return <p>No flights found</p>;
  }

  return (
    <div>
      {Object.entries(flights).map(([airline, airlineFlights]) => (
        <div key={airline} style={{ marginBottom: "1.5rem" }}>
          <h2>{airline}</h2>
          <ul>
            {airlineFlights.map((flight) => (
              <FlightCard key={flight.flightId} flight={flight} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}