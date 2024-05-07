import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../../products";
import RotatingImage from "../../components/RotateImg";
import "./ProductPage.css"
import { ShopContext } from "../../context/shop-context";

function ProductPage() {
    const { id } = useParams();
    const product = PRODUCTS.find((product) => product.id === Number(id));
    const {addToCart, cartItems} = useContext(ShopContext)
    const cartAmount = cartItems[id]

    if (!product) {
        return (
            <div>
                <h3>Product Not Found</h3>
            </div>
        );
    }

    return (
        <div className="product-page">
            <div className="rotating-image-container">
            <RotatingImage productImage = {product.productImage}/>
            </div>
            <div className="product-page-info">
                <h2>{product.productName}</h2>
                <b><p>Price: ${product.price}</p></b>
                <p id="product-description">{product.productDescription}</p>
                <button className="addToCartBttn" onClick={() => addToCart(product.id)}>Add To Cart {cartAmount > 0 && <>({cartAmount})</>}</button>
            </div>
        </div>
    );
}


export default ProductPage