import React from "react";
import { PRODUCTS } from "../../../products.js";
import Product from './Product.jsx';
import './shop.css'
import Header from "../../components/Header.jsx";

export default function Shop() {
    return (
    <>
    <Header />
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
