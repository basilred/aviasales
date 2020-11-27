import React from 'react';
import Ticket, { TTicket } from '../Ticket/Ticket';
import './Tickets.css';

interface Props {
  filters: number[];
  tickets: TTicket[];
}

const Tickets: React.FC<Props> = ({ filters, tickets }) => {
  let filteredTickets: TTicket[] = [];

  if (filters.length) {
    if (filters.indexOf(-1) !== -1) {
      filteredTickets = tickets;
    } else {
      filteredTickets = tickets.filter((ticket) => filters.indexOf(ticket.stops) !== -1);
    }
  }

  return (
    <ul className="Tickets">
      {filteredTickets.map((ticket) => <Ticket key={ticket.uid} ticket={ticket} />)}
    </ul>
  );
};

export default Tickets;
