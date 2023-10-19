const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		planets: [],
		characters: [],
		vehicles: [],
		favorites: [],
		apiUrl: "https://swapi.dev/api",
	  },
	  actions: {
		getCharacters: () => {
		  let store = getStore();
		  fetch(store.apiUrl + "/people")
			.then((resp) => resp.json())
			.then((data) => setStore({ characters: data.results }))
			.catch((error) => console.log(error));
		},
		getPlanets: () => {
		  let store = getStore();
		  fetch(store.apiUrl + "/planets")
			.then((resp) => resp.json())
			.then((data) => setStore({ planets: data.results }))
			.catch((error) => console.log(error));
		},
		getVehicles: () => {
		  let store = getStore();
		  fetch(store.apiUrl + "/vehicles")
			.then((resp) => resp.json())
			.then((data) => setStore({ vehicles: data.results }))
			.catch((error) => console.log(error));
		},
		addFavorites: (index, category) => {
		  let store = getStore();
		  if (category == "characters") {
			store.favorites.push(store.characters[index]);
		  } else if (category == "planets") {
			store.favorites.push(store.planets[index]);
		  } else {
			store.favorites.push(store.vehicles[index]);
		  }
		  setStore(store);
		},
		deleteFavorites: (index) => {
		  let store = getStore();
		  let newFavorites = store.favorites.filter((item, idx) => idx != index);
		  setStore({ favorites: newFavorites });
		},
	  },
	};
  };
  
  export default getState;
  