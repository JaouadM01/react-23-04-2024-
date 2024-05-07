import React from "react";
import { REVIEWS } from "../../../reviews";
import Review from "./review";

function Reviews(){
    return(
    <div className="reviews-container">
        {REVIEWS.map((review, index) => (
            <Review data={review} key={index}/>
        ))}
    </div>)
}

export default Reviews