import React from "react";
import styled from "styled-components";
import LeftPanelScreen from "./LeftPanelScreen/LeftPanelScreen";
import NavigationButton from "./NavigationButton/NavigationButton";

const LeftPanel = styled.div`
  width: 47%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const LeftPanelContainer = ({ setPokemonIndex, pokemonIndex, pokemon }) => (
  <LeftPanel>
    <LeftPanelScreen
      pokemon={pokemon}
      pokemonIndex={pokemonIndex}
    ></LeftPanelScreen>
    <NavigationButton
      pokemonIndex={pokemonIndex}
      setPokemonIndex={setPokemonIndex}
    ></NavigationButton>
  </LeftPanel>
);

export default LeftPanelContainer;
