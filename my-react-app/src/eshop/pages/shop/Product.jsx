import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

const Product = (props) => {
    const {id, productName, price, productImage } = props.data;
    const {addToCart, cartItems} = useContext(ShopContext)
    const cartAmount = cartItems[id]
    return <div className="product">
        <img src={productImage}></img>
        <div className="description">
            <b><p>{productName}</p></b>
            <p>${price}</p>
        </div>
        <button className="addToCartBttn" onClick={() => {addToCart(id)}}>Add To Cart
        {cartAmount > 0 && <>({cartAmount})</>}</button>
    </div>;
}

export default Product