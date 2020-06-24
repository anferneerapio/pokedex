import React from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";

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

const LoaderParent = styled(Loader)`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ErrorMessage = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PanelContainer = ({ pokemonIndex, pokemon, fetching, error }) => (
  <Panel>
    <ImageContainer>
      {fetching ? (
        <LoaderParent color="green" type="ThreeDots"></LoaderParent>
      ) : (
        <>
          {error ? (
            <ErrorMessage>{error}</ErrorMessage>
          ) : (
            <Image src={pokemon.sprites.front_default}></Image>
          )}
        </>
      )}
    </ImageContainer>
  </Panel>
);

export default connect(
  (state) => ({
    fetching: state.pokemon.fetching,
    error: state.pokemon.error,
  }),
  {}
)(PanelContainer);
