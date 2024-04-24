import React, { useState } from 'react';
import Product from './Product';
import bepis from '../images/bepis.png';
import conke from '../images/conke.jpg';
import mountainDew from '../images/mountaindont.jpg';
import sprite from '../images/spite.jpg';
import drPepper from '../images/y.jpg';
import Buypopup from './Buypopup';

const products = [
  {
    img: bepis,
    name: 'Bepis',
    phone: '(212) 555-1234',
    email: 'mr.bepisenjoyer.meow'
  },
  {
    img: conke,
    name: 'Conke',
    phone: '(777) zionists boot licker',
    email: 'ihavenomorals.com'
  },
  {
    img: sprite,
    name: 'Spite',
    phone: '(987) 654-3210',
    email: 'spite@mememail.com'
  },
  {
    img: mountainDew,
    name: "Mountain Don't",
    phone: '(555) 123-4567',
    email: 'mountaindont@mememail.com'
  },
  {
    img: drPepper,
    name: 'Dr. Salt',
    phone: '(888) 999-0000',
    email: 'drsalt@mememail.com'
  }
];

export default function ProductCarousel() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleProducts = products.slice(startIndex, startIndex + 3);

  const goToPreviousProducts = () => {
    setStartIndex(prevStartIndex => Math.max(0, prevStartIndex - 1));
  };

  const goToNextProducts = () => {
    setStartIndex(prevStartIndex => Math.min(products.length - 3, prevStartIndex + 1));
  };

  const [showPopup, setShowPopup] = useState(false);

  const handleBuyClick = () => {
    setShowPopup(true)
  }

  return (
    <div className="product-carousel">
      <h2 className='carousel-titel'>Drinks</h2>
      <div className="products">
        {showPopup && <Buypopup Accept={() => setShowPopup(false)} />}
        <button onClick={goToPreviousProducts}>Previous</button>
        {visibleProducts.map((product, index) => (
          <Product key={index} {...product} onClick={handleBuyClick}/>
        ))}
        <button onClick={goToNextProducts}>Next</button>
      </div>
    </div>
  );
}
