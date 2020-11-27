import React from 'react';
import TicketStops from '../TicketStops';
import './TicketTimes.css';

interface Props {
  departure: string;
  arrival: string;
  stops: number;
}

const addLeadingZero = (processedTime: string) => ((processedTime.length < 5) ? `0${processedTime}` : processedTime);

const TicketTimes: React.FC<Props> = ({ departure, arrival, stops }) => (
  <div className="TicketTimes">
    <span className="Ticket__departure-time">
      {addLeadingZero(departure)}
    </span>
    <TicketStops stops={stops} />
    <span className="Ticket__arrival-time">
      {addLeadingZero(arrival)}
    </span>
  </div>
);

export default TicketTimes;
