import React from "react";
import styled from "styled-components";
import { grey } from "../../theme/colors/colors";

const StyledContainer = styled.div`
  background-color: ${grey[100]};
`;

const StyledDiv = styled.div`
  margin: 0 auto 2rem auto;
  max-width: 550px;
  padding: 10px;
`;

function ContentLayout({ children }) {
  return (
    <StyledContainer>
      <StyledDiv>{children}</StyledDiv>
    </StyledContainer>
  );
}

export default ContentLayout;
