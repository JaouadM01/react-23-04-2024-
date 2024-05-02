import React, {useContext} from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../../products";
import { CartItem } from "./CartItem";
import "./Cart.css"
import { useNavigate } from "react-router-dom";

export default function Cart(props){
    const {resetCart, cartItems, getTotalCartAmount} = useContext(ShopContext)
    const total = getTotalCartAmount()
    const navigate = useNavigate()
    return(
        <div className="cart">
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0){
                        return <CartItem data={product}/>
                    }
                })}
            </div>
            {total > 0 ? 
            <div className="checkout">
                
                <p>Subtotal: $ {total}</p>
                <button onClick={resetCart}>reset cart</button>
                <button onClick={() => navigate("/shop")}> Continue Shopping </button>
                <button> Checkout </button>
            </div>
            : <div className="checkout"><h1> Your cart is empty, please return to the store for purchases </h1>
                <button onClick={() => navigate("/shop")}> Continue Shopping </button>
                </div> }
        </div>
        
    )
}