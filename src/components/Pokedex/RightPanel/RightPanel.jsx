import React from "react";
import styled from "styled-components";
import InfoScreen from "./InfoScreen/InfoScreen";
import Keypad from "./Keypad/Keypad";

const RightPanel = styled.div`
  width: 47%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RightPanelWhiteClip = styled.div`
  background-color: rgb(16, 5, 61);
  width: 195px;
  height: 64px;
  position: absolute;
  right: 0px;
  border-radius: 0px 0px 0px 64px;
  z-index: 25;
  right: 5px;
  top: 0px;
`;

const RightPanelWhiteClipper = styled.div`
  height: 64px;
  background-color: rgb(192, 14, 14);
  width: 174px;
  position: absolute;
  top: 0px;
  right: 17px;
  z-index: 10;
`;

const RightPanelClip = styled.div`
  background-color: rgb(16, 5, 61);
  width: 100%;
  height: 64px;
  position: absolute;
  top: 0px;
`;

const RightPanelClipper = styled.div`
  height: 64px;
  background-color: rgb(192, 14, 14);
  width: 174px;
  position: absolute;
  top: 0px;
  border-radius: 0px 64px 0px 0px;
  left: 0px;
`;

const RightPanelContainer = ({ pokemon, pokemonIndex }) => (
  <RightPanel>
    <RightPanelWhiteClip></RightPanelWhiteClip>
    <RightPanelWhiteClipper></RightPanelWhiteClipper>
    <RightPanelClip></RightPanelClip>
    <RightPanelClipper></RightPanelClipper>
    <InfoScreen pokemon={pokemon} pokemonIndex={pokemonIndex}></InfoScreen>
    <Keypad></Keypad>
  </RightPanel>
);

export default RightPanelContainer;
