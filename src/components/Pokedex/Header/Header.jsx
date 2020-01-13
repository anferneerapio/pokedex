import React from "react";

import styled from "styled-components";

const Header = styled.div`
  background-color: rgb(139, 0, 3);
  width: 203px;
  height: 102px;
  border-radius: 32px 0px 64px 0px;
  position: absolute;
  z-index: 10;
  top: -48px;
`;

const HeaderShadow = styled.div`
  background-color: rgb(96, 8, 7);
  width: 203px;
  height: 102px;
  position: absolute;
  z-index: 9;
  top: -36px;
  left: -8px;
  border-radius: 32px 0px 64px 0px;
`;

const HeaderExtension = styled.div`
  background-color: rgb(139, 0, 3);
  width: 161px;
  height: 102px;
  position: absolute;
  z-index: 10;
  top: 0px;
  left: 197px;
`;

const HeaderClip = styled.div`
  height: 53px;
  background-color: rgb(192, 14, 14);
  width: 174px;
  position: absolute;
  bottom: 0px;
  left: -14px;
  border-radius: 64px 0px 0px 0px;
`;

const LedLightContainer = styled.div`
  display: flex;
  margin: 16px;
  width: 95px;
  justify-content: space-evenly;
`;

const LedLight = styled.div`
  border-radius: 50%;
  /* box-shadow: inset 0 0 10px #000000; */
  border: 1px solid grey;
  background-color: ${props => {
    if (props.color === "red") {
      return "rgb(224, 70, 66)";
    } else if (props.color === "yellow") {
      return "rgb(252,250,119)";
    } else if (props.color === "green") {
      return "rgb(101,229,61)";
    }
  }};
  height: 20px;
  width: 20px;
`;

export default () => (
  <>
    <HeaderShadow></HeaderShadow>
    <Header>
      <LedLightContainer>
        <LedLight color="red"></LedLight>
        <LedLight color="yellow"></LedLight>
        <LedLight color="green"></LedLight>
      </LedLightContainer>
      <HeaderExtension>
        <HeaderClip></HeaderClip>
      </HeaderExtension>
    </Header>
  </>
);
