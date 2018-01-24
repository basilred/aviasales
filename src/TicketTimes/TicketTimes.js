import React, { Component } from 'react';
import './TicketTimes.css';

import TicketStops from '../TicketStops/TicketStops';

class TicketTimes extends Component {

    addLeadingZero = (processedTime) => {
        return (processedTime.length < 5) ? '0' + processedTime : processedTime;
    }

    render() {
        return (
            <div className="TicketTimes">
                <span className="Ticket__departure-time">
                    {this.addLeadingZero(this.props.departure)}
                </span>
                <TicketStops stops={this.props.stops} />
                <span className="Ticket__arrival-time">
                    {this.addLeadingZero(this.props.arrival)}
                </span>
            </div>
        );
    }
}

export default TicketTimes;
