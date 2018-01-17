import React, { Component } from 'react';
import Ticket from '../Ticket/Ticket';
import './Tickets.css';

class Tickets extends Component {
    render() {
        return (
            <ul className="Tickets">
                {this.props.tickets.map((item, index) => <Ticket key={index} ticket={item}/>)}
            </ul>
        );
    }
}

export default Tickets;
