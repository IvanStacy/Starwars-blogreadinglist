import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Details = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const category = params.category;
  const index = params.index;
  let item = store[category][index];

  return (
    <div className="container">
      <div className="top d-flex">
        <div>
        <img height={550} width={500} src={
        category=="characters"?"https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/"+(index+1)+".jpg": 
        category=="planets"?"https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/planets/"+(index+1)+".jpg":
        "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/vehicles/"+(index+1)+".jpg"
      } /> 
      
        </div>
        <div>
          <h3>{item.name}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="bottom row border-top-0">
        <div className="col">
          <h7><strong>Name</strong></h7>
          <br></br>
          {item.name}
        </div>
        <div className="col">
          <h7><strong>{category=="characters"?"Birth Year": category=="planets"?"Climate":"Manufacturer"}</strong></h7>
          <p>{item.birth_year||item.climate||item.manufacturer}</p>
        </div>
        <div className="col">
          <h7><strong>{category=="characters"?"Gender": category=="planets"?"Population":"Length"}</strong></h7>
          <p>{item.gender||item.population||item.length}</p>
        </div>
        <div className="col">
          <h7><strong>{category=="characters"?"Height": category=="planets"?"Orbital Period":"Model"}</strong></h7>
          <p>{item.height||item.orbital_period||item.model}</p>
        </div>
        <div className="col">
          <h7><strong>{category=="characters"?"Skin Color": category=="planets"?"Rotation Period":"Created"}</strong></h7>
          <p>{item.skin_color||item.rotation_period||item.created}</p>
        </div>
        <div className="col">
          <h7><strong>{category=="characters"?"Eye Color": category=="planets"?"Diameter":"Max Atmosphering Speed"}</strong></h7>
          <p>{item.eye_color||item.diameter||item.max_atmosphering_speed}</p>
        </div>
      </div>
    </div>
  );
};
