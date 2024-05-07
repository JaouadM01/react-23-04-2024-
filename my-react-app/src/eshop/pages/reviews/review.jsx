import React from "react";
import "./review.css"
import star1 from "./1star.png";
import star2 from "./2star.png";
import star3 from "./3star.png";
import star4 from "./4star.png";
import star5 from "./5star.png";

function Review(props) {
    const { id, customer, star, comment } = props.data;

    const starImage = () => {
        const starImages = [star1, star2, star3, star4, star5];
        return <img src={starImages[star - 1]} alt={`Star ${star}`} />;
    };

    return (
        <div className="review-container">
            <h3>{customer}</h3>
            {starImage()}
            <p>{comment}</p>
        </div>
    );
}

export default Review;
