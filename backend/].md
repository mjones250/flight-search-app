# Backend – Flight Search API (AWS Lambda + API Gateway)

This is the serverless HTTP API built using AWS API Gateway and AWS Lambda for the Flight Search application. It filters, sorts, and groups flight data based on:

- Departure airport (`from`)
- Arrival airport (`to`)
- Date (`date`)

## Architecture
The backend uses a lightweight serverless architecture:
- AWS Lambda (Node.js)
- API Gateway (REST API)
- Serverless function that:
  - Accepts query parameters
  ⁠- Filters flights
  ⁠- Sorts by departure time
  ⁠- Groups results by airline
  ⁠- Returns JSON


## API Endpoint
GET/flights

### Query Parameters
- 'airline' -  Filter by airline
- 'from' - Origin airport
- 'to' - Destination airport
- 'date' -  YYYY-MM-DD
- At least one must be provided

### Example request:
https://mwr3d41lej.execute-api.us-east-2.amazonaws.com/prd/flights?from=CMH&to=TEB&date=2026-02-01

### Example response:
'''json
{
  "Delta Airlines": [
    {
      "flightId": "DL123",
      "airline": "Delta Airlines",
      "from": "CMH",
      "to": "TEB",
      "departureTime": "2026-02-01T09:00:00Z",
      "arrivalTime": "2026-02-01T11:00:00Z"
    }
  ],
  "United Airlines": [
    {
      "flightId": "UA456",
      "airline": "United Airlines",
      "from": "CMH",
      "to": "TEB",
      "departureTime": "2026-02-01T12:00:00Z",
      "arrivalTime": "2026-02-01T14:00:00Z"
    }
  ]
}
