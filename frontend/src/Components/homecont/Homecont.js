import "../homecont/Homecont.css";
import homeimage from '../homecont/bg_2.jpeg';
import logo from '../homecont/logo.png';

function Homecont() {
  return (
    <div className="container">
      <img className='homelogo' alt = ""src={logo}/>
      <p className="text">
        Your Ticket to <br />
        Exceptional Service: <br />
        Where Your <br />
        Journey Begins!
      </p>
      <img className="homeimage" alt = " "src={homeimage}/>
    </div>
  );
}

export default Homecont;
