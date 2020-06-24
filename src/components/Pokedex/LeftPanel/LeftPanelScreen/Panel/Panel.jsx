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

const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const Image = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
`;

const PanelContainer = ({ pokemonIndex, pokemon }) => (
  <Panel>
    <ImageContainer>
      <Image src={pokemon.sprites.front_default}></Image>
    </ImageContainer>
  </Panel>
);

export default PanelContainer;
