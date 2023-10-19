const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			currentItem: {},
			people: [],
			planets: [],
			vehicles: [],
			favorites: [],
			apiUrl: "https://www.swapi.tech/api/",
		},
		actions: {
			getDetails: async (type, data) => {
				const url = getStore().apiUrl + type;

				data.results.forEach(async (element, idx) => {
					const response = await fetch(url + '/' + element.uid);
					const item = await response.json();
					data.results[idx].details = item.result;
				});
				console.log(type, data);
				setStore({ [type]: data.results })
			},
			getPeople: () => {
				const url = getStore().apiUrl + "people";
				const request = getActions().apiCall(url);
				request.then(data => {
					// console.log("inside getPlanets", data);
					if (data.message == "ok") {
						getActions().getDetails('people', data);
						// setStore({ planets: data.results })
					}
				})
			},
			getPlanets: () => {
				const url = getStore().apiUrl + "planets";
				const request = getActions().apiCall(url);
				request.then(data => {
					// console.log("inside getPlanets", data);
					if (data.message == "ok") {
						getActions().getDetails('planets', data);
						// setStore({ planets: data.results })
					}
				})
			},
			getVehicles: () => {
				const url = getStore().apiUrl + "vehicles";
				const request = getActions().apiCall(url);
				request.then(data => {
					// console.log("inside getVehicles", data);
					if (data.message == "ok") {
						getActions().getDetails('vehicles', data);
						// setStore({ vehicles: data.results })
					}
				})
			},
			getItem: (type, id) => {
				const url = getStore().apiUrl + type;
				const request = getActions().apiCall(`${url}/${id}`);
				request.then(data => {
					if (data.message == "ok") {
						setStore({ currentItem: data.results })
					}
				})
			},
			addFavorites: (index, category) => {
				let store = getStore();
				if (category == "character") {
					store.favorites.push(store.people[index])
				} else if (category == "planet") {
					store.favorites.push(store.planets[index])
				} else { store.favorites.push(store.vehicles[index]) }
				setStore(store);
			},
			deleteFavorites: (index) => {
				let store = getStore();
				let newFavorites = store.favorites.filter((item, idx) => idx != index)
				setStore({ favorites: newFavorites })
			},
			apiCall: (url) => {
				return fetch(url).then(response => response.json());
			},
			// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			// loadSomeData: () => {
			// 	/**

			// 		fetch().then().then(data => setStore({ "foo": data.bar }))
			// 	*/
			// },
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }
		}
	};
};

export default getState;
