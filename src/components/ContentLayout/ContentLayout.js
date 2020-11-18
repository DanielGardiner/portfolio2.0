import React from "react";
import styled from "styled-components";
import { grey } from "../../theme/colors/colors";
import { breakpoint } from "../../utils/breakpoints/breakpoints";

const StyledContainer = styled.div`
  background-color: ${grey[100]};
`;

const StyledDiv = styled.div`
  margin: 0 auto 2rem auto;
  max-width: 1250px;
  padding: 30px 10px;

  ${breakpoint("sm")`
    padding: 70px 40px;
  `}
`;

function ContentLayout({ children }) {
  return (
    <StyledContainer>
      <StyledDiv>{children}</StyledDiv>
    </StyledContainer>
  );
}

export default ContentLayout;
