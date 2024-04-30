import React from "react";
import { PRODUCTS } from "../../../products.js";
import Product from './Product.jsx';
import './shop.css'


export default function Shop() {
    return (
    <>
    <div className="shop">
            <div className="shopTitle">
                <h1> Jaouad's Eshop</h1>
            </div>
            <div className="products">
                {PRODUCTS.map((product, index) => (
                    <Product key={index} data={product}/>
                ))}
            </div>
        </div>
    </>
    );
}
