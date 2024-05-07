import React from 'react';
import { Link } from 'react-router-dom';
import {ShoppingCart} from 'phosphor-react';
import '../components/Header.css'

function Header() {
  return (
    <div className='navbar'>
        <h3 className='title'>Jaouad's Store</h3>
        <div className='links'>
            <Link to='/reviews'>Reviews</Link>
            <Link to='/shop'>Shop</Link>
            <Link to='/cart'><ShoppingCart size={32}/></Link>
        </div>
    </div>
  );
}

export default Header;
