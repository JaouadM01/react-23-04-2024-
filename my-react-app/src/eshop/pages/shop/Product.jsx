import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Link } from "react-router-dom";

const Product = (props) => {
    const {id, productName, price, productImage } = props.data;
    const {addToCart, cartItems} = useContext(ShopContext)
    const cartAmount = cartItems[id]

    return <div className="product">
        <Link to={`/product/${id}`}>
        <img src={productImage}></img>
        
        <div className="description">
            <b><p>{productName}</p></b>
            <p>${price}</p>
        </div>
        </Link>
        <button className="addToCartBttn" onClick={() => {addToCart(id)}}>Add To Cart
        {cartAmount > 0 && <>({cartAmount})</>}</button>
    </div>;
}

export default Product