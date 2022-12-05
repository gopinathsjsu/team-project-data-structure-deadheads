import React from 'react';
import './flight-grid.css';

const FlightsGrid = (props) => {
  const flights = props.flights || {};
  const flightsCount = (flights.nonStopFlights && flights.nonStopFlights.length) + (flights.multiStopFlights && flights.multiStopFlights.length)
  return (
    <div className="flights-info-container">
      {props.criteria && <FlightSearchInfo criteria={props.criteria} count={flightsCount || 0} />}
      {flights.nonStopFlights && flights.nonStopFlights.map(flight => <FlightInfo data={flight} />)}
      {flights.multiStopFlights && flights.multiStopFlights.map(flight => <MultiFlightInfo data={flight} />)}
    </div>
  );
}

export default FlightsGrid;
