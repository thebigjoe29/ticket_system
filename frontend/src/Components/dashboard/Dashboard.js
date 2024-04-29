import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import Navbar from '../navbar/Navbar';
import writelogo from './writelogo.png';
import all from './all.png';
import neww from './new.png';
import ongoing from './ongoing.png';
import resolved from './resloved.png';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ticketsPerPage = 3;
  const indexOfLastTicket = currentPage * ticketsPerPage;
  const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
  const totalPages = Math.ceil(tickets.length / ticketsPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [filterCriterion, setFilterCriterion] = useState('all');
  const email = localStorage.getItem("auth");
  

  const handleFilterClick = (priority) => {
    setCurrentPage(1); 
    setFilterCriterion(priority);
  };


  const fetchTicketInfo = (email) => {
    return new Promise((resolve, reject) => {
      fetch(`http://localhost:5056/ticketinfo?email=${email}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("Data received:", data);
          resolve(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          reject(error);
        });
    });
  };


  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const data = await fetchTicketInfo(email);
        console.log("All Tickets:", data); 
        setTickets(data);
      } catch (error) {
        console.error('Error fetching tickets:', error);
        
      }
    };

    fetchTickets();
  }, [email]);

  const getfiltertickets = ()=>{
    const filteredTickets = tickets.filter((ticket) => ticket.priority === filterCriterion);
    if(filterCriterion==="all") return tickets;
    return filteredTickets;
  }


  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <h1 className="dashboard-heading">Tickets</h1>
        <div className="search-create-container">
          <Link to="/create"><button className="create-ticket-btn">
            <img src={writelogo} alt="create-logo" className="create-logo" />
            Create Ticket
          </button></Link>
        </div>
      <div className="status-buttons">
      <button className="status-btn all-tickets" onClick={() => handleFilterClick('all')}>
            <img src={all} alt="All Tickets Logo" className="button-logo" />
            All Tickets
          </button>
          <button className={`status-btn all-tickets ${filterCriterion === 'new' ? 'active' : ''}`} onClick={() => handleFilterClick('new')}>
            <img src={neww} alt="New Logo" className="button-logo" />
            New ticket
          </button>
          <button className={`status-btn all-tickets ${filterCriterion === 'ongoing' ? 'active' : ''}`} onClick={() => handleFilterClick('Ongoing')}>
            <img src={ongoing} alt="Ongoing Logo" className="button-logo" />
            Ongoing
          </button>
          <button className={`status-btn all-tickets ${filterCriterion === 'resolved' ? 'active' : ''}`} onClick={() => handleFilterClick('Resolved')}>
            <img src={resolved} alt="Resolved Logo" className="button-logo" />
            Resolved
          </button>
        </div>
      <div className="tickets-container">
  {getfiltertickets().slice(indexOfFirstTicket, indexOfLastTicket).map((ticket) => (
    <div key={ticket.number} className="ticket-item">
      <p>Email: {ticket.email}</p>
      <p>Type: {ticket.type}</p>
      <p>Priority: {ticket.priority}</p>
      <p>Details: {ticket.details}</p>
    </div>
  ))}
  <div className="pagination-container">
    <ul className="pagination-list">
      {Array.from({ length: totalPages }, (_, index) => (
        <li key={index + 1} onClick={() => paginate(index + 1)} className="pagination-item">
          {index + 1}
        </li>
      ))}
    </ul>
  </div>
  </div>
    </div>
    </div>
  );
};

export default Dashboard;
