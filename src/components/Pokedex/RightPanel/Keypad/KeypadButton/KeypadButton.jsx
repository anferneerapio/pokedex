import React from "react";
import styled from "styled-components";

const KeypadButton = styled.div`
  height: 40px;
  width: 50px;
  background-color: rgb(16, 69, 233);
  box-shadow: inset 2px -2px 8px rgba(0, 0, 0, 0.65);
  border-radius: 8px;
`;

export default () => <KeypadButton></KeypadButton>;
