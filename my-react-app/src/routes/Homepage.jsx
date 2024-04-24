import React,{useState} from "react";
import Header from "../Header/Header.jsx";
import CookieModal from "../Header/CookieModal.jsx";


function Homepage(){
    const [showModal, setShowModal] = useState(true);
  
    const handleAcceptCookies = () => {
      setShowModal(false)
    }

    return(
        <div>
            <Header />
            <div className="cookies">
                {showModal && <CookieModal onAccept={handleAcceptCookies}/>}      
            </div> 
            
            <h3>Sup Sup</h3>
        </div>
    )
}

export default Homepage