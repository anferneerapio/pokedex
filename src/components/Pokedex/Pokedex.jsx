import React from "react";
import styled from "styled-components";
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

export default () => (
  <>
    <PokedexShadow></PokedexShadow>
    <Header></Header>
    <Pokedex>
      <LeftPanel></LeftPanel>
      <Connector></Connector>
      <RightPanel></RightPanel>
    </Pokedex>
  </>
);
