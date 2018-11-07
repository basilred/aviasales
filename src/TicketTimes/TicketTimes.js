import React from 'react';
import PropTypes from 'prop-types';
import './TicketTimes.css';

import TicketStops from '../TicketStops/TicketStops';

const addLeadingZero = processedTime => ((processedTime.length < 5) ? `0${processedTime}` : processedTime);

const TicketTimes = ({ departure, arrival, stops }) => (
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

TicketTimes.propTypes = {
  departure: PropTypes.string.isRequired,
  arrival: PropTypes.string.isRequired,
  stops: PropTypes.number.isRequired,
};

export default TicketTimes;
