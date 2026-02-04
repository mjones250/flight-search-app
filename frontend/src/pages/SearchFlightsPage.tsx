import FlightSearchForm from '../components/FlightSearchForm';
import FlightResults from '../components/FlightResults';
import { useFlights } from '../hooks/useFlights';

export default function SearchFlightsPage() {
  const { flights, loading, error, searchFlights } = useFlights();

  return (
    <section>
      <h1 style={{ marginBottom: '1.5rem', fontSize: '1.75rem' }}>
  Search Flights
</h1>

      <FlightSearchForm onSearch={searchFlights} />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <FlightResults flights={flights} />
    </section>
  );
}