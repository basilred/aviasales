import React from 'react';
import PropTypes from 'prop-types';
import './TicketStops.css';

const decline = (stops) => {
  if (stops === 0) {
    return '';
  }

  if (stops === 1) {
    return `${stops} пересадка`;
  }

  if (stops < 5) {
    return `${stops} пересадки`;
  }

  return `${stops} пересадок`;
};

const TicketStops = ({ stops }) => (
  <div className="TicketStops">
    <span>{decline(stops)}</span>
    <div className="TicketStops__plane" />
  </div>
);

TicketStops.propTypes = {
  stops: PropTypes.number.isRequired,
};

export default TicketStops;
