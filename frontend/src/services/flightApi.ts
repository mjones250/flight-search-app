import { Flight } from '../types/flight';

type SearchParams = {
  origin: string;
  destination: string;
  date: string;
};

const API_BASE_URL =
  'https://mwr3d41lej.execute-api.us-east-2.amazonaws.com/prd/flights';

export async function fetchFlights(
  params: SearchParams
): Promise<Record<string, Flight[]>> {
  const url = `${API_BASE_URL}?from=${params.origin}&to=${params.destination}&date=${params.date}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch flights');
  }

  return response.json() as Promise<Record<string, Flight[]>>;
}