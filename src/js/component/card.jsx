import React from "react";

export const Card = (props) => {
    const item = props.item;
    const link = `/${props.category}/detail/${props.item.uid}`;
    console.log("inside card", link);
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title ">{item.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="navbar px-2">
                <a className="btn btn-primary" href={link}>Learn More!</a>
                <button className="btn btn-outline-warning" onClick={() => props.addFavorites(props.index, props.category)}><i class="fa-solid fa-star"></i></button>
            </div>
        </div>
    );
};