import { useState } from "react";
import logo from "./logo.png";
import "./Navbar.css";
import db from "./dbicon.jpg";
import user from "./usericon.jpg";
import officials from "./officialicon.jpg";
import { Link } from "react-router-dom";
const showNav=()=> {
  const nav = document.getElementById("mySidenav");
if (nav.style.display === "none") {
  nav.style.display = "block";
} else {
  nav.style.display = "none";
}
};

const Navbar = () => {
  const [menuActive] = useState(false);

  return (
    <div>
    <nav className="navv">
      <div className="logo">
        <img className="logo hidden-mobile" alt="" src={logo} />
      </div>
      <div className="left">
        <button 
          className={`menu-toggle ${menuActive ? "active" : ""}`}
          onClick={showNav}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
      </div>
        <a className="site-settings" href=" ">
        <Link to="/">Logout</Link>
        </a>
    </nav>
    <div id="mySidenav" class="sidenav">
    <div className="sideicon">
        <h1>Ticket Lead</h1>
        </div>
        <div className="sideicon">
        <a className="atag" href=" "><img className="usericon"src={db} alt=""></img><Link to="/dashboard">Dashboard</Link></a>
        </div>
        <div className="sideicon">
        <a className="atag"href=" "> <img className="usericon1" src={user} alt=""></img><Link to="/user">User Profile</Link></a>
        </div>
        <div className="sideicon">
        <a className="atag"href=" "> <img className="usericon" src={officials} alt=""></img><Link to="/contact">Contact Us</Link> </a>
        </div>
      </div>  
    </div>
    
  );
};

export default Navbar;
