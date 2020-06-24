import {
  FETCH_ALL_POKEMON,
  FETCH_POKEMON,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAILED,
} from "../actions/action-types";

const intialState = {
  pokemonList: [],
  pokemonCount: 0,
  pokemon: {
    name: "",
    sprites: {
      front_default: "",
    },
  },
  fetching: false,
};

export default (state = intialState, action) => {
  switch (action.type) {
    case FETCH_ALL_POKEMON: {
      const { pokemon_entries: pokemonList } = action.payload;
      return {
        ...state,
        pokemonCount: pokemonList.length,
      };
    }
    case FETCH_POKEMON: {
      return {
        ...state,
        fetching: true,
      };
    }
    case FETCH_POKEMON_SUCCESS: {
      return {
        ...state,
        fetching: false,
        pokemon: action.payload,
      };
    }
    case FETCH_POKEMON_FAILED: {
      return {
        ...state,
        fetching: false,
        error: action.payload.name,
      };
    }
    default: {
      return state;
    }
  }
};
