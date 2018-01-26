import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TicketStops.css';

class TicketStops extends Component {
  static decline(stops) {
    if (stops === 0) {
      return '';
    } else if (stops === 1) {
      return `${stops} пересадка`;
    } else if (stops < 5) {
      return `${stops} пересадки`;
    }

    return `${stops} пересадок`;
  }

  render() {
    return (
      <div className="TicketStops">
        <span>{TicketStops.decline(this.props.stops)}</span>
        <div className="TicketStops__plane" />
      </div>
    );
  }
}

TicketStops.propTypes = {
  stops: PropTypes.number.isRequired,
};

export default TicketStops;
