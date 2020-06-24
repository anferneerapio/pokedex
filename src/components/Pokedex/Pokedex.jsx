import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import { fetchPokemon } from "../../actions/actions";

import LeftPanel from "./LeftPanel/LeftPanel";
import RightPanel from "./RightPanel/RightPanel";
import Connector from "./Connector/Connector";
import Header from "./Header/Header";

const Pokedex = styled.div`
  width: 100%;
  height: 446px;
  background-color: rgb(192, 14, 14);
  position: relative;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PokedexShadow = styled.div`
  width: 100%;
  height: 446px;
  background-color: rgb(100, 5, 6);
  position: absolute;
  top: 8px;
  right: 8px;
  border-radius: 32px;
`;

const PokedexContainer = ({ fetchPokemon, pokemon }) => {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  useEffect(() => {
    fetchPokemon(pokemonIndex + 1);
  }, [pokemonIndex]);

  return (
    <>
      <PokedexShadow></PokedexShadow>
      <Header></Header>
      <Pokedex>
        <LeftPanel
          pokemon={pokemon}
          pokemonIndex={pokemonIndex}
          setPokemonIndex={setPokemonIndex}
        ></LeftPanel>
        <Connector></Connector>
        <RightPanel pokemon={pokemon} pokemonIndex={pokemonIndex}></RightPanel>
      </Pokedex>
    </>
  );
};

export default connect((state) => ({ pokemon: state.pokemon.pokemon }), {
  fetchPokemon,
})(PokedexContainer);
