import { FETCH_ALL_POKEMON, FETCH_POKEMON } from "./action-types";
import pokedexAPI from "../apis/pokedexAPI";

export const fetchPokemonList = () => async (dispatch) => {
  const response = await pokedexAPI("/pokedex/1");
  dispatch({ type: FETCH_ALL_POKEMON, payload: response.data });
};
