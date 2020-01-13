import React from "react";
import styled from "styled-components";

import Pokedex from "./Pokedex/Pokedex";

const App = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 762px;
  height: 505px;

  position: relative;
`;

export default () => (
  <App>
    <Container>
      <Pokedex></Pokedex>
    </Container>
  </App>
);
