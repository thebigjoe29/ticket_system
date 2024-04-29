import React, { useState } from 'react';
import './User.css';
import Navbar from '../navbar/Navbar';
import Popup from './UpgradePopup'; 
import Subpop from './SubmitPopup'; 

function User() {
  const [name, setName] = useState('User Name');
  const [email, setEmail] = useState('user@example.com');
  const [phone, setPhone] = useState('123-456-7890');
  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [showUpgradePopup, setShowUpgradePopup] = useState(false); 
  const [showSubmitPopup, setShowSubmitPopup] = useState(false); 


  const togglePushNotifications = () => {
    setPushNotifications(!pushNotifications);
  };

  const toggleEmailNotifications = () => {
    setEmailNotifications(!emailNotifications);
  };


  const closeUpgradePopup = () => {
    setShowUpgradePopup(false);
  };

  const openSubmitPopup = () => {
    setShowSubmitPopup(true);
  };

  const closeSubmitPopup = () => {
    setShowSubmitPopup(false);
  };

  return (
    <div>
      <Navbar></Navbar>
    <div className="centered-container">
      <div className="user-container">
        <div className="left-panel">
          <div className="settings">
            <div className="image-placeholder">
            </div>
            <h1>User Settings</h1>
          </div>
        </div>
        <div className="right-panel">
          <h2>Update Profile</h2>
          <div className="input-group">
            <label htmlFor="user-name">Name:</label>
            <input type="text" id="user-name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="input-group">
          <label htmlFor="user-email">Email Address:</label>
          <input type="text" id="user-email" value={email} onChange={(e) => setEmail(e.target.value)} />

          </div>
          <div className="input-group">
            <label htmlFor="user-phone">Phone Number:</label>
            <input type="text" id="user-phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="input-group">
            <label>Push Notifications:</label>
            <label className={`slider-switch ${pushNotifications ? 'active' : ''}`} onClick={togglePushNotifications}>
              <div className={`slider ${pushNotifications ? 'active' : ''}`}></div>
            </label>
          </div>
          <div className="input-group">
            <label>Email Notifications:</label>
            <label className={`slider-switch ${emailNotifications ? 'active' : ''}`} onClick={toggleEmailNotifications}>
              <div className={`slider ${emailNotifications ? 'active' : ''}`}></div>
            </label>
          </div>
          <button className="submit-button" onClick={openSubmitPopup}>
            Submit
          </button>
        </div>
      </div>
      </div>
      
      {showUpgradePopup && (
        <Popup message="Thank you for upgrading to Premium!" onClose={closeUpgradePopup} />
      )}

      
      {showSubmitPopup && (
        <Subpop message="Your profile has been updated successfully!" onClose={closeSubmitPopup} />
      )}
    </div>
  );
}

export default User;
