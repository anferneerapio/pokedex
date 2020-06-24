import React from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import { connect } from "react-redux";

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

const LoaderParent = styled(Loader)`
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PokemonInfo = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 70px;
`;

const InforScreenContainer = ({ pokemon, pokemonIndex, fetching, error }) => (
  <InfoScreen>
    <PokemonInfo>
      <span>No. {pokemonIndex}: </span>
      {fetching ? (
        <LoaderParent color="green" type="ThreeDots"></LoaderParent>
      ) : (
        <>{error ? "----" : <span>{pokemon.name.toUpperCase()}</span>}</>
      )}
    </PokemonInfo>
  </InfoScreen>
);

export default connect(
  (state) => ({
    fetching: state.pokemon.fetching,
    error: state.pokemon.error,
  }),
  {}
)(InforScreenContainer);
