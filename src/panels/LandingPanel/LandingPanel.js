import React from "react";
import styled from "styled-components";

const LandingPanelContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

function LandingPanel() {
  //
  return (
    <LandingPanelContainer>
      <div style={{ width: "50%", backgroundColor: "black" }}>
        <div style={{ display: "flex" }}>
          <div>Nav 1</div>
          <div>Nav 2</div>
          <div>Nav 3</div>
          <div>Nav 4</div>
        </div>
      </div>
      <div style={{ width: "50%" }}></div>
    </LandingPanelContainer>
  );
}

export default LandingPanel;
