import React, { Component } from 'react';
import './Ticket.css';

import TicketTimes from '../TicketTimes/TicketTimes';

// import carriers logo
import BA from '../Logo/carrier_ba.svg';
import TK from '../Logo/carrier_tk.png';
import S7 from '../Logo/carrier_s7.svg';
import SU from '../Logo/carrier_su.svg';

class Ticket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carriers: {
                logo: {
                    BA, TK, S7, SU
                }
            }
        }
    }

    realDate = (date) => {
        const dateArray = date.split('.');
        const result = new Date(Number(dateArray[2]) + 2000, dateArray[1] - 1, dateArray[0]);
        console.dir(result);

        return result.toDateString();
    }

    render() {
        const ticket = this.props.ticket;

        return (
            <div className="Ticket">
                <div className="Ticket__left">
                    <img
                        src={this.state.carriers.logo[ticket.carrier]}
                        className="Ticket__carrier"
                        alt="logo"
                    />
                    <button
                        type="button"
                        className="Ticket__button">
                            Купить<br/>за {ticket.price.toLocaleString()} ₽
                    </button>
                </div>
                <div className="Ticket__right">
                    <TicketTimes departure={ticket.departure_time} arrival={ticket.arrival_time} stops={ticket.stops} />
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
            </div>
        );
    }
}

export default Ticket;
