import React, { Component } from 'react';
import './TicketStops.css';

class TicketStops extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stopDeclension: this.decline(this.props.stops),
        }
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
            <div className="TicketStops">
                <span>{this.state.stopDeclension}</span>
                <div className="TicketStops__plane" />
            </div>
        );
    }
}

export default TicketStops;
