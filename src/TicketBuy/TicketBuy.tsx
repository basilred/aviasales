import React from 'react';
import './TicketBuy.css';

import CarrierLogo from '../CarrierLogo';

interface Props {
  carrier: string;
  price: number;
}

const TicketBuy = ({ carrier, price }: Props) => (
  <>
    <CarrierLogo key="img" carrier={carrier} />
    <button
      key="btn"
      className="Ticket__button"
      type="button"
    >
      Купить
      <br />
      {`за ${price.toLocaleString()} ₽`}
    </button>
  </>
);

export default TicketBuy;
