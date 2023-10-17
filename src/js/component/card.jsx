import React from "react";

export const Card = (props) => {
    const item = props.item;
    console.log("inside card", item);
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="navbar">
                <button className="btn btn-primary">Learn More!</button>
                <button className="btn" onClick={()=> props.addFavorites(props.index, props.category)}><i class="fa-solid fa-star"></i></button>
            </div>
        </div>
    );
};