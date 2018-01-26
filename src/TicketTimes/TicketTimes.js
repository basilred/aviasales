import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TicketTimes.css';

import TicketStops from '../TicketStops/TicketStops';

class TicketTimes extends Component {
  static addLeadingZero(processedTime) {
    return (processedTime.length < 5) ? `0${processedTime}` : processedTime;
  }

  render() {
    return (
      <div className="TicketTimes">
        <span className="Ticket__departure-time">
          {TicketTimes.addLeadingZero(this.props.departure)}
        </span>
        <TicketStops stops={this.props.stops} />
        <span className="Ticket__arrival-time">
          {TicketTimes.addLeadingZero(this.props.arrival)}
        </span>
      </div>
    );
  }
}

TicketTimes.propTypes = {
  departure: PropTypes.string.isRequired,
  arrival: PropTypes.string.isRequired,
  stops: PropTypes.number.isRequired,
};

export default TicketTimes;
