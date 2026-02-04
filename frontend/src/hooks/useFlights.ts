import { useState } from 'react';
import { fetchFlights } from '../services/flightApi';
import { Flight } from '../types/flight';

type SearchParams = {
  origin: string;
  destination: string;
  date: string;
};

export function useFlights() {
  const [flights, setFlights] = useState<Record<string, Flight[]>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function searchFlights(params: SearchParams) {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchFlights(params);
      setFlights(data);
    } catch {
      setError('Failed to fetch flights');
    } finally {
      setLoading(false);
    }
  }

  return { flights, loading, error, searchFlights };
}