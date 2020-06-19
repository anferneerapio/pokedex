import React from "react";
import styled from "styled-components";

const Panel = styled.div`
  width: 85%;
  height: 75%;
  background-color: white;
  border-radius: 16px;
  position: relative;
  margin: 16px auto;
  border: 3px solid rgb(72, 72, 72);
`;

const PanelContainer = ({ pokemonIndex }) => <Panel>{pokemonIndex}</Panel>;

export default PanelContainer;
