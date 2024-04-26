import React from "react";

function Review(props){
    const {id, customer, star, comment} = props.data;
    return(
        <div className="review">
            <p>{customer}</p>
            <p>{star}</p>
            <p>{comment}</p>
        </div>
    )
}

export default Review