import React, { Component } from 'react';
import './TicketTimes.css';

import TicketStops from '../TicketStops/TicketStops';

class TicketTimes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            departure: this.addLeadingZero(this.props.departure),
            arrival: this.addLeadingZero(this.props.arrival),
        }
    }

    addLeadingZero = (processedTime) => {
        return (processedTime.length < 5) ? '0' + processedTime : processedTime;
    }

    render() {
        return (
            <div className="TicketTimes">
                <span className="Ticket__departure-time">
                    {this.state.departure}
                </span>
                <TicketStops stops={this.props.stops} />
                <span className="Ticket__arrival-time">
                    {this.state.arrival}
                </span>
            </div>
        );
    }
}

export default TicketTimes;
