import React from 'react';
import './UpgradePopup.css';

function Popup({ message, onClose }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Upgrade to Premium</h2>
        <p>If you upgrade to Premium, you can get unlimited ticket access! Monthly plans start from INR 299!!</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Popup;
