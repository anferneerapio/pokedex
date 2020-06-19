import React from "react";
import styled from "styled-components";
import KeypadButton from "./KeypadButton/KeypadButton";

const Keypad = styled.div`
  width: 255px;
  height: 80px;
  display: flex;
  flex-wrap: wrap;
  margin: 16px 0 16px 0;
`;

const KeypadContainer = () => (
  <Keypad>
    <KeypadButton></KeypadButton>
    <KeypadButton></KeypadButton>
    <KeypadButton></KeypadButton>
    <KeypadButton></KeypadButton>
    <KeypadButton></KeypadButton>
    <KeypadButton></KeypadButton>
    <KeypadButton></KeypadButton>
    <KeypadButton></KeypadButton>
    <KeypadButton></KeypadButton>
    <KeypadButton></KeypadButton>
  </Keypad>
);

export default KeypadContainer;
