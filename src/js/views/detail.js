import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Detail = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	let type;

	switch (params.category) {
		case "people":
			type = 'people'
			break;
		case "vehicle":
			type = 'vehicles';
			break;
		case "planet":
			type = 'planets';
			break;
	}

	let item = store[type][parseInt(params.theid) - 1];

	console.log(store[type][parseInt(params.theid) - 1]);

	return item && (
		<div className="jumbotron">
			<h1 className="display-4">This will show the demo element: {item.name}</h1>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Detail.propTypes = {
	match: PropTypes.object
};