import * as React from 'react';
import { Flight } from '../types/flight';

type Props = {
  flight: Flight;
};

const formatDate = (iso: string) => {
  const date = new Date(iso);
  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit"
  });
};

export default function FlightCard({ flight }: Props) {
  return React.createElement(
    'li',
    null,
    React.createElement('strong', null, flight.airline),
    ' : ',
    flight.from,
    ' → ',
    flight.to,
    React.createElement('br'),
    `${formatDate(flight.departureTime)} → ${formatDate(flight.arrivalTime)}`
  );
}