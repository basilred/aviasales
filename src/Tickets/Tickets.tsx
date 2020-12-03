import Ticket from '../Ticket/Ticket';
import { TTicket } from '../Ticket/Ticket';
import './Tickets.css';

interface Props {
  filters: number[];
  tickets: TTicket[];
}

const Tickets = ({ filters, tickets }: Props) => {
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
