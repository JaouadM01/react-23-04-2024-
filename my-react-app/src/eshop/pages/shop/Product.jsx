import React from "react";

const Product = (props) => {
    const {id, productName, price, productImage } = props.data;
    return <div className="product">
        <img src={productImage}></img>
        <div className="description">
            <b><p>{productName}</p></b>
            <p>${price}</p>
        </div>
        <button className="addToCartBttn">Add To Cart</button>
    </div>;
}

export default Product