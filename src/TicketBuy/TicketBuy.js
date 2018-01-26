import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TicketBuy.css';

import CarrierLogo from '../CarrierLogo/CarrierLogo';

class TicketBuy extends Component {
  render() {
    return ([
      <CarrierLogo key="img" carrier={this.props.carrier} />,
      <button
        key="btn"
        className="Ticket__button"
        type="button"
      >
        Купить<br />за {this.props.price.toLocaleString()} ₽
      </button>,
    ]);
  }
}

TicketBuy.propTypes = {
  carrier: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default TicketBuy;
