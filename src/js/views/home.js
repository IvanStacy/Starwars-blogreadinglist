import React, {useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {Card} from "../component/card.jsx";
import { Context } from "../store/appContext";

function Home() {
	const { store, actions } = useContext(Context);
	return(
		<div className="container">
			<h1>Characters</h1>
			<div className="row flex-nowrap navbar-nav-scroll ">
			{
				store.characters.map((character, index) => <div className="col"> <Card item={character} index={index} category="character" addFavorites={actions.addFavorites}/> </div>)
			}
			</div>
			<h1>Planets</h1>
			<div className="row flex-nowrap navbar-nav-scroll ">
			{
				store.planets.map((planet, index) => <div className="col"> <Card item={planet} index={index} category="planet" addFavorites={actions.addFavorites}/> </div>)
			}
			</div>
			<h1>Vehicle</h1>
			<div className="row flex-nowrap navbar-nav-scroll ">
			{
				store.vehicles.map((vehicle, index) => <div className="col"> <Card item={vehicle} index={index} category="vehicle" addFavorites={actions.addFavorites}/> </div>)
			}
			</div>
		</div>
	)

}
export default Home;

