import React from "react";
import styled from "styled-components";

const Bolt = styled.div`
  margin: 64px 0;
  background: linear-gradient(
    0.25turn,
    rgb(116, 8, 7),
    rgb(189, 10, 13),
    rgb(116, 8, 7)
  );
  height: 48px;
  width: 48px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 4px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

const BoltContainer = () => <Bolt></Bolt>;

export default BoltContainer;
