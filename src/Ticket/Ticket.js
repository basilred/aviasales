import React, { Component } from 'react';
import './Ticket.css';
import logo from '../Logo/Logo.png';
import plane from '../Logo/Plane.svg';

class Ticket extends Component {
    localize = (stops) => {
        if (stops === 0) {
            return '';
        } else if (stops === 1) {
            return `${stops} пересадка`;
        } else {
            return `${stops} пересадки`;
        }
    }

    render() {
        return (
            <div className="Ticket">
                <div className="Ticket__left">
                    <img src={logo} className="Ticket__carrier" alt="logo" />
                    <button type="button" className="Ticket__button">Купить<br/>за {this.props.item.price.toLocaleString({ style: 'currrency', currency: 'USD' })} ₽</button>
                </div>
                <div className="Ticket__right">
                    <div className="Ticket__times">
                        <span className="Ticket__departure-time">
                            {this.props.item.departure_time}
                        </span>
                        <div className="Ticket__stops">
                            <span>{this.localize(this.props.item.stops)}</span>
                            <img src={plane} alt=""/>
                        </div>
                        <span className="Ticket__arrival-time">
                            {this.props.item.arrival_time}
                        </span>
                    </div>
                    Ticket from {this.props.item.origin} to {this.props.item.destination}
                </div>
            </div>
        );
    }
}

export default Ticket;
