import React from "react";
import styled from "styled-components";
import Bolt from "../Bolt/Bolt";

const Connector = styled.div`
  width: 6%;
  height: 99%;
  border: 1px solid black;
  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 20;
`;

const ConnectorContainer = () => (
  <Connector>
    <div
      style={{
        position: "absolute",
        top: "-112px",
        right: "50%",
        transform: "translateX(50%)",
      }}
    >
      <Bolt></Bolt>
    </div>
    <Bolt></Bolt>
    <Bolt></Bolt>
  </Connector>
);

export default ConnectorContainer;
