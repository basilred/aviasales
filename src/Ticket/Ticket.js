import React, { Component } from 'react';
import './Ticket.css';

import TicketBuy from '../TicketBuy/TicketBuy';
import TicketTimes from '../TicketTimes/TicketTimes';

class Ticket extends Component {
    realDate = (date) => {
        const dateArray = date.split('.');
        const result = new Date(Number(dateArray[2]) + 2000, dateArray[1] - 1, dateArray[0]);

        return result.toDateString();
    }

    render() {
        const ticket = this.props.ticket;

        return (
            <li className="Ticket">
                <div className="Ticket__left">
                    <TicketBuy carrier={ticket.carrier} price={ticket.price} />
                </div>
                <div className="Ticket__right">
                    <TicketTimes
                        departure={ticket.departure_time}
                        arrival={ticket.arrival_time}
                        stops={ticket.stops}
                    />
                    <div className="Ticket__fromto">
                        <div className="Ticket__departure">
                            <div>{ticket.origin}, {ticket.origin_name}</div>
                            <div className="Ticket__date">{this.realDate(ticket.departure_date)}</div>
                        </div>
                        <div className="Ticket__arrival">
                            <div>{ticket.destination_name}, {ticket.destination}</div>
                            <div className="Ticket__date">{this.realDate(ticket.arrival_date)}</div>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

export default Ticket;
