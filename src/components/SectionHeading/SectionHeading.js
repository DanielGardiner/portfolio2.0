import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledHeading = styled.h3`
  font-size: 2rem;
  text-align: center;
  margin: 25px 0;

  overflow: hidden;
  text-align: center;
`;

const StyledSpan = styled.span`
  position: relative;
  display: inline-block;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    border-bottom: 5px solid;
    width: 100vw;
    margin: 0 20px;
  }

  &::before {
    right: 100%;
  }

  &::after {
    left: 100%;
  }
`;

function SectionHeading({ title }) {
  return (
    <div>
      <StyledHeading>
        <StyledSpan>{title}</StyledSpan>
      </StyledHeading>
    </div>
  );
}

SectionHeading.propTypes = {
  title: PropTypes.string,
};

export default SectionHeading;
