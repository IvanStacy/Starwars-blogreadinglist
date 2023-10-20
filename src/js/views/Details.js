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

  let imageBaseUrl;
  
  switch(category) {
    case "characters": 
      imageBaseUrl = "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/";
      break;
    case "planets":
      imageBaseUrl = "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/planets/"
      break;
    default:
      imageBaseUrl =  "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/vehicles/";
      break;
  }

  const imgLink = `${imageBaseUrl}${parseInt(index) + 1}.jpg`;

  return (
    <div className="container">
      <div className="top d-flex">
        <div>
        {/* <img height={550} width={500} src={
        category==="characters"?"https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/"+(index+1)+".jpg": 
        category=="planets"?"https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/planets/"+(index+1)+".jpg":
        "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/vehicles/"+(index+1)+".jpg"
      } />  */}

      <img height={500} src={imgLink} />
        </div>
        <div>
          <h3 className="ps-3" >{item.name}</h3>
          <p className="p-5 text-center">
          Vi jobbet sammen i samme redaksjon, men skjærte oss ikke direkte og kommuniserte bare av og til.
          Jeg skrev nyhetene, og Misha og gutta hans valgte ut illustrasjoner for dem.
          Jeg ble venn med ham på Facebook da han arrangerte en videosending fra et firmaarrangement, 
          så jeg og andre eksterne ansatte deltok også i det. To uker senere tok han ferie og fløy til meg. 
          Det var 12. juni 2016, den dagen Misha fridde til meg. Han sa: "Jeg har allerede levd et langt liv,
          jeg har sett og opplevd mye, nå vil jeg vie meg til å gjøre deg lykkelig." Og han begynte å gjøre meg glad hver dag.
          </p>
        </div>
      </div>
      <div className="bottom row border-top-0 mt-5">
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
