import React, { Component } from 'react';
import './Ticket.css';

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
                    <img
                        src={this.state.carriers.logo[this.props.item.carrier]}
                        className="Ticket__carrier"
                        alt="logo"
                    />
                    <button
                        type="button"
                        className="Ticket__button">
                            Купить<br/>за {this.props.item.price.toLocaleString()} ₽
                    </button>
                </div>
                <div className="Ticket__right">
                    <div className="Ticket__times">
                        <span className="Ticket__departure-time">
                            {this.props.item.departure_time}
                        </span>
                        <div className="Ticket__stops">
                            <span>{this.localize(this.props.item.stops)}</span>
                            <div className="Ticket__plane" />
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
