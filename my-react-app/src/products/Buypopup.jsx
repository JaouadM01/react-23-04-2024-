const Buypopup = ({ Accept }) => {
    return (
      <div className="cookie-modal">
        <div className="modal-content">
          <h2>Are you sure you want to make this purchase?</h2>
          <p>If you accept the terms and conditions we will recieve payment upfront. as morgage we need your kidneys</p>
          <div className="btn-container">
            <button onClick={Accept}>Accept</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Buypopup;
  