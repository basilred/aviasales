import React from 'react';
import PropTypes from 'prop-types';
import Ticket from '../Ticket/Ticket';
import './Tickets.css';

function Tickets(props) {
  const { filters, tickets } = props;
  let filteredTickets = [];

  if (filters.length) {
    if (filters.indexOf(-1) !== -1) {
      filteredTickets = tickets;
    } else {
      filteredTickets = tickets.filter(ticket => filters.indexOf(ticket.stops) !== -1);
    }
  }

  return (
    <ul className="Tickets">
      {filteredTickets.map(ticket => <Ticket key={ticket.uid} ticket={ticket} />)}
    </ul>
  );
}

Tickets.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.number).isRequired,
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Tickets;
