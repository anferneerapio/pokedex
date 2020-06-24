import React from "react";
import styled from "styled-components";

const NavigationButton = styled.div`
  background-color: rgb(24, 24, 24);
  height: 25px;
  width: 25px;
  border-radius: 4px;
  position: absolute;
  top: ${({ direction }) => {
    if (direction === "up") {
      return "-20px";
    } else if (direction === "down") {
      return "20px";
    } else {
      return "0px";
    }
  }};
  left: ${({ direction }) => {
    if (direction === "left") {
      return "-20px";
    } else if (direction === "right") {
      return "20px";
    } else {
      return "0px";
    }
  }};
  cursor: pointer;
`;

const NavigationButtonCenter = styled.div`
  background-color: rgb(24, 24, 24);
  height: 25px;
  width: 25px;
  position: absolute;
  bottom: 48px;
  right: 64px;
  z-index: 10;
  cursor: pointer;
`;

const NavClick = ({ direction, pokemonIndex, setPokemonIndex }) => {
  if (direction === "down") {
    if (pokemonIndex < 10) {
      setPokemonIndex(0);
    } else {
      setPokemonIndex(pokemonIndex - 10);
    }
  }
  if (direction === "up") {
    if (pokemonIndex > 800) {
      setPokemonIndex(806);
    } else {
      setPokemonIndex(pokemonIndex + 10);
    }
  }
  if (direction === "right") {
    if (pokemonIndex === 806) {
      setPokemonIndex(0);
    } else {
      setPokemonIndex(pokemonIndex + 1);
    }
  }
  if (direction === "left") {
    if (pokemonIndex === 0) {
      setPokemonIndex(806);
    } else {
      setPokemonIndex(pokemonIndex - 1);
    }
  }
};

const NavigationButtonContainer = ({ setPokemonIndex, pokemonIndex }) => (
  <>
    <NavigationButtonCenter>
      <NavigationButton
        onClick={() => {
          NavClick({ direction: "up", pokemonIndex, setPokemonIndex });
        }}
        direction="up"
      ></NavigationButton>
      <NavigationButton
        onClick={() => {
          NavClick({ direction: "right", pokemonIndex, setPokemonIndex });
        }}
        direction="right"
      ></NavigationButton>
      <NavigationButton
        onClick={() => {
          NavClick({ direction: "down", pokemonIndex, setPokemonIndex });
        }}
        direction="down"
      ></NavigationButton>
      <NavigationButton
        onClick={() => {
          NavClick({ direction: "left", pokemonIndex, setPokemonIndex });
        }}
        direction="left"
      ></NavigationButton>
    </NavigationButtonCenter>
  </>
);

export default NavigationButtonContainer;
