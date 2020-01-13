import React from "react";
import styled from "styled-components";

const RightPanel = styled.div`
  width: 47%;
  height: 100%;
`;

const RightPanelWhiteClip = styled.div`
  background-color: white;
  width: 195px;
  height: 64px;
  position: absolute;
  right: 0px;
  border-radius: 0px 0px 0px 64px;
  z-index: 25;
  right: 5px;
`;

const RightPanelWhiteClipper = styled.div`
  height: 64px;
  background-color: rgb(192, 14, 14);
  width: 174px;
  position: absolute;
  top: 0px;
  right: 16px;
`;

const RightPanelClip = styled.div`
  background-color: white;
  width: 100%;
  height: 64px;
`;

const RightPanelClipper = styled.div`
  height: 64px;
  background-color: rgb(192, 14, 14);
  width: 174px;
  position: absolute;
  top: 0px;
  border-radius: 0px 64px 0px 0px;
`;

export default () => (
  <RightPanel>
    <RightPanelWhiteClip></RightPanelWhiteClip>
    <RightPanelWhiteClipper></RightPanelWhiteClipper>
    <RightPanelClip></RightPanelClip>
    <RightPanelClipper></RightPanelClipper>
  </RightPanel>
);
