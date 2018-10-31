import React from 'react';
import PropTypes from 'prop-types';
import './TicketBuy.css';

import CarrierLogo from '../CarrierLogo/CarrierLogo';

const TicketBuy = ({ carrier, price }) => [
  <CarrierLogo key="img" carrier={carrier} />,
  <button
    key="btn"
    className="Ticket__button"
    type="button"
  >
    Купить<br />за {price.toLocaleString()} ₽
  </button>,
];

TicketBuy.propTypes = {
  carrier: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default TicketBuy;
