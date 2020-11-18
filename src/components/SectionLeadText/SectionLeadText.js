import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledText = styled.p`
  font-size: 1.1rem;
  text-align: center;
`;

function SectionLeadText({ text }) {
  return <StyledText>{text}</StyledText>;
}

SectionLeadText.propTypes = {
  text: PropTypes.string,
};

export default SectionLeadText;
