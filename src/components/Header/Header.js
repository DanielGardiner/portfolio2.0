import React from "react";
import styled from "styled-components";

const StyledHeaderContainer = styled.div`
  background: #eee;
  border-bottom: 1px solid #ddd;
`;

const StyledHeader = styled.div`
  margin: 0 auto;
  max-width: 550px;
  padding: 10px;
`;

const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledHeader>Header</StyledHeader>
    </StyledHeaderContainer>
  );
};

export default Header;
