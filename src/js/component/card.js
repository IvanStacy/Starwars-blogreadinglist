import React from "react";
import { Link } from "react-router-dom";

export const Card = (props) => {
  let item = props.item;
  return (
    <div className="card" style={{ width: "17rem" }}>
      <img src={
        props.category=="characters"?"https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/"+(props.index+1)+".jpg": 
        props.category=="planets"?"https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/planets/"+(props.index+1)+".jpg":
        "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/vehicles/"+(props.index+1)+".jpg"
      } className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title ">{item.name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <div className="navbar px-2">
        <Link to={"/" + props.category + "/detail/" + props.index}>
          <a className="btn btn-primary">Learn More!</a>
        </Link>
        <button
          className="btn btn-outline-warning"
          onClick={() => props.addFavorites(props.index, props.category)}
        >
          <i class="fa-solid fa-star"></i>
        </button>
      </div>
    </div>
  );
};
