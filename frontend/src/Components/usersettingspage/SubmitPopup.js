import React from 'react';
import './SubmitPopup.css';

function Popup({ message, onClose }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Submit Status</h2>
        <p>Your changes have been submitted!!</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Popup;
