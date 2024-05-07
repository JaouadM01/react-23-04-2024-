import React from 'react';
import "./RotatingImage.css"

const RotatingImage = (props) => {
    const {productImage} = props
  return (
    <div className="rotating-image-container">
      <img src={productImage} alt="Rotating Image" className="rotating-image" />
    </div>
  );
};

export default RotatingImage;
