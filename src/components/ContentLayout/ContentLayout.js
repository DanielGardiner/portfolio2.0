import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin: 1rem auto 2rem auto;
  max-width: 550px;
  padding: 10px;
`;

function ContentLayout({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}

export default ContentLayout;
