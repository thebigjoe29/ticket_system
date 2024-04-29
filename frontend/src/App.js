import './App.css';
import Homepage from './signup';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import User from './Components/usersettingspage/User';
import ContactPage from './Components/official/ContactPage';
import Dashboard from './Components/dashboard/Dashboard';
import TicketForm from './Components/create/CreateForm';
import Signinbox from './Components/loginbox/signin';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Signinbox/>} />
      <Route path="/createaccount" element={<Homepage/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/user" element={<User/>} />
 
      <Route path="/create" element={<TicketForm/>} />

      <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
    </div>
  );
}

export default App;