import React, { useState } from "react";
import "./CreateForm.css";
import Navbar from "../navbar/Navbar";
import axios from "axios";
function TicketForm() {
  // const [newTicket, setNewTicket] = useState({
  //   type: "general",
  //   priority: "general",
  //   email: "",
  //   details: "",
  // });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setNewTicket((prevTicket) => ({
  //     ...prevTicket,
  //     [name]: value,
  //   }));
  // };
  // const handleCreateTicket = () => {
  //   onCreateTicket(newTicket);
  //   setNewTicket({
  //     type: "general",
  //     priority: "general",
  //     email: "",
  //     details: "",
  //   });
  // };
  const [email, setEmail] = useState();
  const [type, setType] = useState();
  const [priority, setPriority] = useState();
  const [details, setDetails] = useState();

  let handleCreateTicket = (event) => {
    let obj = { email, type, priority, details };
    const url = "http://localhost:5056/ticketinfo/create-ticket";
    axios
      .post(url, obj)
      .then((res) => {
        if (res.status === 200) {
          alert("Ticket Created Succesfully");
        } else {
          alert("error");
          Promise.reject();
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="ticket-form" onCreateTicket={handleCreateTicket}>
        <h2>Create New Ticket</h2>
        <h4>Write and Address New Queries and Issues</h4>
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="type">Ticket Type:</label>
        <select id="type" name="type" onChange={(e) => setType(e.target.value)}>
        <option value="select">--select</option>
          <option value="general">General</option>
          <option value="software">Software</option>
          <option value="others">Others</option>
        </select>

        <label htmlFor="priority">Status:</label>
        <select
          id="priority"
          name="priority"
          onChange={(e) => setPriority(e.target.value)}
        >
        <option value="select">--select</option>
          <option value="new">New</option>
          <option value="Ongoing">Ongoing</option>
          <option value="Resolved">Resolved</option>
        </select>

        <label htmlFor="details">Ticket Details (max 200 words):</label>
        <textarea
          id="details"
          name="details"
          onChange={(e) => setDetails(e.target.value)}
          maxLength={200}
        />

        <button onClick={handleCreateTicket}>Create New Ticket</button>
      </div>
    </div>
  );
}

export default TicketForm;
