import React, { Component } from 'react';
import './TicketTimes.css';

class TicketTimes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stopDeclension: this.decline(this.props.stops),
            departure: this.addLeadingZero(this.props.departure),
            arrival: this.addLeadingZero(this.props.arrival),
        }
    }

    addLeadingZero = (processedTime) => {
        return (processedTime.length < 5) ? '0' + processedTime : processedTime;
    }

    decline = (stops) => {
        if (stops === 0) {
            return '';
        } else if (stops === 1) {
            return `${stops} пересадка`;
        } else if (stops < 5) {
            return `${stops} пересадки`;
        } else {
            return `${stops} пересадок`;
        }
    }

    render() {
        return (
            <div className="TicketTimes">
                <span className="Ticket__departure-time">
                    {this.state.departure}
                </span>
                <div className="Ticket__stops">
                    <span>{this.state.stopDeclension}</span>
                    <div className="Ticket__plane" />
                </div>
                <span className="Ticket__arrival-time">
                    {this.state.arrival}
                </span>
            </div>
        );
    }
}

export default TicketTimes;
