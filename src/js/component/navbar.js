import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light mb-3">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">StarWars</span>
        </Link>
        <div className="ml-auto">
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {store.favorites.map((item, index) => {
                return (
                  <li className="navbar">
                    {" "}
                    <div> {item.name} </div>
                    <button onClick={() => actions.deleteFavorites(index)}>
                      <i class="fa-solid fa-trash"></i>{" "}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
