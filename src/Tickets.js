import React, { Component } from 'react';
import Ticket from './Ticket';

class Tickets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tickets: [ 1, 2, 3 ]
        };
    }

    render() {
        return <div className="Tickets">{this.state.tickets.map(() => <Ticket />)}</div>;
    }
}

export default Tickets;
