import {
  FETCH_ALL_POKEMON,
  FETCH_POKEMON,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAILED,
} from "./action-types";
import pokedexAPI from "../apis/pokedexAPI";

export const fetchPokemonList = () => async (dispatch) => {
  const response = await pokedexAPI("/pokedex/1");
  dispatch({ type: FETCH_ALL_POKEMON, payload: response.data });
};

export const fetchPokemon = (id) => async (dispatch) => {
  dispatch({ type: FETCH_POKEMON });
  try {
    const response = await pokedexAPI(`/pokemon/${id}`);
    dispatch({ type: FETCH_POKEMON_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_POKEMON_FAILED, payload: error });
  }
};
