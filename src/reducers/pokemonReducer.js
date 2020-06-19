import { FETCH_ALL_POKEMON, FETCH_POKEMON } from "../actions/action-types";

const initialState = {
  pokemonList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_POKEMON: {
      const { pokemon_entries: pokemonList } = action.payload;
      return {
        ...state,
        pokemonList,
      };
    }
    case FETCH_POKEMON: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};
