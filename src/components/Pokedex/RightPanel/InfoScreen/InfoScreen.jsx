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
  padding: 8px;
`;

const LoaderParent = styled(Loader)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PokemonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 70px;
`;

const PokemonName = styled.span`
  margin: 16px 0;
`;

const PokemonType = styled.span`
  align-self: flex-end;
`;

const PokemonStats = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
`;

const PokemonInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const generateName = ({ pokemon, pokemonIndex, fetching, error }) => (
  <div style={{ height: "100%", width: "100%" }}>
    {fetching ? (
      <LoaderParent color="green" type="ThreeDots"></LoaderParent>
    ) : (
      <div style={{ height: "100%", width: "100%" }}>
        {error ? (
          "----"
        ) : (
          <PokemonInfo>
            <PokemonType>
              Type:{" "}
              {pokemon.types.map(({ type, slot }) => (
                <span key={slot}>{type.name.toUpperCase()} </span>
              ))}
            </PokemonType>
            <PokemonName>
              No. {pokemonIndex}:<span>{pokemon.name.toUpperCase()}</span>
            </PokemonName>
            <PokemonStats>
              {pokemon.stats.map((stat, ind) => (
                <div key={`stat_${ind}`} style={{ marginRight: "24px" }}>
                  <span>{stat.stat.name.toUpperCase()}: </span>
                  <span>{stat.base_stat}</span>
                </div>
              ))}
            </PokemonStats>
          </PokemonInfo>
        )}
      </div>
    )}
  </div>
);

const InforScreenContainer = (props) => (
  <InfoScreen>
    <PokemonDiv></PokemonDiv>
    {generateName(props)}
  </InfoScreen>
);

export default connect(
  (state) => ({
    fetching: state.pokemon.fetching,
    error: state.pokemon.error,
  }),
  {}
)(InforScreenContainer);
