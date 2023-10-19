import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container">
      <h1>Characters</h1>
      <div className="row flex-nowrap navbar-nav-scroll ">
        {store.characters.map((character, index) => (
          <div className="col">
            <Card
              item={character}
              index={index}
              category="characters"
              addFavorites={actions.addFavorites}
            />{" "}
          </div>
        ))}
      </div>
      <h1>Planets</h1>
      <div className="row flex-nowrap navbar-nav-scroll ">
        {store.planets.map((planet, index) => (
          <div className="col">
            {" "}
            <Card
              item={planet}
              index={index}
              category="planets"
              addFavorites={actions.addFavorites}
            />{" "}
          </div>
        ))}
      </div>
      <h1>Vehicle</h1>
      <div className="row flex-nowrap navbar-nav-scroll ">
        {store.vehicles.map((vehicle, index) => (
          <div className="col">
            {" "}
            <Card
              item={vehicle}
              index={index}
              category="vehicles"
              addFavorites={actions.addFavorites}
            />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};
