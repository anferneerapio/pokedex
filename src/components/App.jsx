import React, { useEffect } from "react";
import styled from "styled-components";
import Pokedex from "./Pokedex/Pokedex";
import { fetchPokemonList } from "../actions/actions";
import { connect } from "react-redux";

const AppContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(16, 5, 61);
`;

const Container = styled.div`
  width: 762px;
  height: 505px;
  position: relative;
`;

const App = ({ fetchPokemonList }) => {
  useEffect(() => {
    fetchPokemonList();
  }, [fetchPokemonList]);

  return (
    <AppContainer>
      <Container>
        <Pokedex></Pokedex>
      </Container>
    </AppContainer>
  );
};

export default connect(
  () => {
    return {};
  },
  { fetchPokemonList: fetchPokemonList }
)(App);
