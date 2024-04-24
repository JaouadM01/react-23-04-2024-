import React, { useState } from "react";
import phoneEmote from "../images/phoneemote.png";
import emailEmote from "../images/emailemote.jpg";

export default function Product(props) {
  return (
    <div className="product-card">
      <img src={props.img} alt={props.name} />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src={phoneEmote} alt="Phone" />
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <img src={emailEmote} alt="Email" />
        <p>{props.email}</p>
        <button onClick={props.onClick}>buy</button>
      </div>
    </div>
  );
}
