import React, { Component } from 'react';
import Ticket from '../Ticket/Ticket';
import './Tickets.css';
import { tickets } from './tickets.json';

class Tickets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tickets,
        };
    }

    render() {
        return (
            <div className="Tickets">
                {this.state.tickets.map((item, index) => <Ticket key={index} ticket={item}/>)}
            </div>
        );
    }
}

export default Tickets;
