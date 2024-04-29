import React from 'react';

const Filter = ({ tickets, filterCriterion }) => {
  console.log("Filtering tickets for priority:", filterCriterion);

  const filteredTickets = tickets.filter((ticket) => ticket.priority === filterCriterion);

  console.log("Filtered Tickets:", filteredTickets);
  if(filterCriterion === "all"){
    return tickets;
  }

  return (
    <div>
      <h2 className="filtered-heading">{`${filterCriterion.charAt(0).toUpperCase()}${filterCriterion.slice(1)} Tickets`}</h2>
      <div className="filtered-tickets-container">
        {filteredTickets.map((ticket) => (
          <div key={ticket.number} className="ticket-item">
            <p>Email: {ticket.email}</p>
            <p>Type: {ticket.type}</p>
            <p>Priority: {ticket.priority}</p>
            <p>Details: {ticket.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
