import React, { Component } from 'react';
import Ticket from '../Ticket/Ticket';
import './Tickets.css';

class Tickets extends Component {
    render() {
        const filters = this.props.filters;
        let tickets = [];

        if (filters.length) {
            tickets = this.props.tickets.filter(ticket => {
                console.log(ticket);
                return filters.indexOf(ticket.stops) !== -1;
            });
        }

        return (
            <ul className="Tickets">
                {tickets
                    .map((item, index) => <Ticket key={index} ticket={item}/>)}
            </ul>
        );
    }
}

export default Tickets;
