import React, { Component } from 'react';
import './TicketBuy.css';

import CarrierLogo from '../CarrierLogo/CarrierLogo';

class TicketBuy extends Component {
    render() {
        return ([
            <CarrierLogo key='img' carrier={this.props.carrier} />,
            <button
                key='btn'
                className="Ticket__button"
                type="button">
                    Купить<br/>за {this.props.price.toLocaleString()} ₽
            </button>
        ]);
    }
}

export default TicketBuy;
