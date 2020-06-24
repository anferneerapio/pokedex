import React from "react";

import styled from "styled-components";

const InfoScreen = styled.div`
  width: 300px;
  height: 120px;
  background: #7eee4c;
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PokemonInfo = styled.div``;

const InforScreenContainer = ({ pokemon, pokemonIndex }) => (
  <InfoScreen>
    <PokemonInfo>
      <span>No. {pokemonIndex}: </span>
      <span>{pokemon.name.toUpperCase()}</span>
    </PokemonInfo>
  </InfoScreen>
);

export default InforScreenContainer;
