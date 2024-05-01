import React, {useContext} from "react";
import { ShopContext } from "../../context/shop-context";

export default function Cart(props){
    const {resetCart} = useContext(ShopContext)
    return(
        <div>
            <h1>cart</h1>
            <button onClick={resetCart}>reset cart</button>
        </div>
        
    )
}