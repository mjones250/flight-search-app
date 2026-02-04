import * as React from 'react';

type SearchParams = {
  origin: string;
  destination: string;
  date: string;
};

type Props = {
  onSearch: (params: SearchParams) => void;
};

export default function FlightSearchForm({ onSearch }: Props) {
  const [origin, setOrigin] = React.useState('');
  const [destination, setDestination] = React.useState('');
  const [date, setDate] = React.useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSearch({ origin, destination, date });
  }

  return React.createElement(
    'form',
    { onSubmit: handleSubmit },
    React.createElement('input', {
      placeholder: 'Origin',
      value: origin,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setOrigin(e.target.value),
      required: false
    }),
    React.createElement('input', {
      placeholder: 'Destination',
      value: destination,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setDestination(e.target.value),
      required: false
    }),
    React.createElement('input', {
      type: 'date',
      value: date,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setDate(e.target.value),
      required: false
    }),
    React.createElement('button', { type: 'submit' }, 'Search')
  );
}