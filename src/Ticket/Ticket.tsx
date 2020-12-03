import './Ticket.css';

import TicketBuy from '../TicketBuy/TicketBuy';
import TicketTimes from '../TicketTimes';

export interface TTicket {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: string;
  stops: number;
  price: number;
  uid: number;
}

interface Props {
  ticket: TTicket;
}

const realDate = (date: string): string => {
  const dateArray: string[] = date.split('.');
  const result = new Date(Number(dateArray[2]) + 2000, +dateArray[1] - 1, +dateArray[0]);

  return result.toDateString();
};

const Ticket = ({ ticket }: Props) => (
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
          <div>{`${ticket.origin}, ${ticket.origin_name}`}</div>
          <div className="Ticket__date">{realDate(ticket.departure_date)}</div>
        </div>
        <div className="Ticket__arrival">
          <div>{`${ticket.destination_name}, ${ticket.destination}`}</div>
          <div className="Ticket__date">{realDate(ticket.arrival_date)}</div>
        </div>
      </div>
    </div>
  </li>
);

export default Ticket;
