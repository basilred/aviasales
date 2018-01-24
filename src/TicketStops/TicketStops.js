import React, { Component } from 'react';
import './TicketStops.css';

class TicketStops extends Component {

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
            <div className="TicketStops">
                <span>{this.decline(this.props.stops)}</span>
                <div className="TicketStops__plane" />
            </div>
        );
    }
}

export default TicketStops;
