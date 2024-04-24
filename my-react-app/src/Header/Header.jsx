import React from 'react';
import { Link } from 'react-router-dom';
import pepe from "../images/pepe.jpg";

function Header() {
  return (
    <nav className="navbar">
      <img src={pepe} alt="Logo" />
      <Link to="/" className="navbar-websitename">My Business</Link>
      <ul className="navbar-nav">
        <li className="navbar-item"><Link to="/" className="nav-link">Home</Link></li>
        <li className="navbar-item"><Link to="/products" className="nav-link">Products</Link></li>
        <li className="navbar-item"><Link to="/" className="nav-link">Reviews</Link></li>
        <li className="navbar-item"><Link to="/" className="nav-link">Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
