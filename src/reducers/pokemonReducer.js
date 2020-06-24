import { FETCH_ALL_POKEMON, FETCH_POKEMON } from "../actions/action-types";

const intialState = {
  pokemonList: [],
  pokemonCount: 0,
  pokemon: {
    name: "",
    sprites: {
      front_default: "",
    },
  },
};

export default (state = intialState, action) => {
  switch (action.type) {
    case FETCH_ALL_POKEMON: {
      const { pokemon_entries: pokemonList } = action.payload;
      return {
        ...state,
        pokemonList,
        pokemonCount: pokemonList.length,
      };
    }
    case FETCH_POKEMON: {
      return {
        ...state,
        pokemon: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
