import React from 'react';

const CookieModal = ({ onAccept }) => {
  return (
    <div className="cookie-modal">
      <div className="modal-content">
        <h2>Cookie Policy</h2>
        <p>We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.</p>
        <div className="btn-container">
          <button onClick={onAccept}>Accept</button>
        </div>
      </div>
    </div>
  );
}

export default CookieModal;
