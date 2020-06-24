import React from "react";
import styled from "styled-components";
import Panel from "./Panel/Panel";

const LeftPanelScreen = styled.div`
  width: 80%;
  height: 52%;
  background-color: rgb(174, 174, 173);
  border-radius: 16px;
  position: relative;
`;

const LeftPanelClip = styled.div`
  position: absolute;
  bottom: -25px;
  left: -25px;
  background: rgb(193, 12, 12);
  height: 50px;
  width: 50px;
  transform: rotate(45deg);
  z-index: 0;
  pointer-events: none;
`;

const LeftPanelScreenContainer = ({ pokemonIndex, pokemon }) => {
  return (
    <LeftPanelScreen>
      <Panel pokemon={pokemon} pokemonIndex={pokemonIndex}></Panel>
      <LeftPanelClip></LeftPanelClip>
    </LeftPanelScreen>
  );
};

export default LeftPanelScreenContainer;
