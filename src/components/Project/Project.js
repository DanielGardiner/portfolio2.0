import React from "react";
import PropTypes from "prop-types";
import Image from "gatsby-image";
import styled from "styled-components";
import iconReact from "../../../images/icon_react.svg";
import iconGithub from "../../../images/icon_github2.svg";
import iconDevices from "../../../images/icon_devices.svg";
import { blue } from "../../theme/colors/colors";
import { breakpoint } from "../../utils/breakpoints/breakpoints";

const StyledProjectImageContainer = styled.div`
  background: ${(props) =>
    props.imageColorPalette
      ? "linear-gradient(90deg, #d68cdc 0%, #89aeff 100%)"
      : "linear-gradient(135deg, #f395ba 0%, #fed182 100%)"};
  border-radius: 16px 16px 0 0;
  height: 270px;
`;

const StyledProjectContainer = styled.div`
  background: #ffffff;
  border-radius: 0 0 16px 16px;

  padding: 20px;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.1);

  ${breakpoint("sm")`
    padding: 40px;
  `}
`;

const StyledTitle = styled.h3`
  font-size: 25px;
  font-family: "DM Serif Display", serif;
`;

const StyledIconContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  /* align-items: center; */
  justify-content: space-between;
  margin-top: 30px;
`;

const StyledIconDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledIconText = styled.p`
  color: ${blue[400]};
  font-family: "Open Sans", sans-serif;
  margin-top: 5px;
`;

const StyledIcon = styled.img`
  width: 60px;
  height: 60px;
`;

function Project({ title, description, skills, imageColorPalette }) {
  return (
    <>
      <StyledProjectImageContainer
        imageColorPalette={imageColorPalette}
      ></StyledProjectImageContainer>
      <StyledProjectContainer>
        <Image />
        <StyledTitle>{title}</StyledTitle>
        <p>{description}</p>

        {/* <StyledIconDiv>
          <StyledIcon
            src={iconReact}
            style={{ width: "85px", height: "60px" }}
          />
          <StyledIconText>{skills}</StyledIconText>
        </StyledIconDiv> */}
        <StyledIconContainer>
          <StyledIconDiv>
            <StyledIcon
              src={iconReact}
              style={{ width: "85px", height: "60px" }}
            />
            <StyledIconText>{skills}</StyledIconText>
          </StyledIconDiv>

          <StyledIconDiv>
            <StyledIcon src={iconGithub} />
            <StyledIconText>Go to code &rarr;</StyledIconText>
          </StyledIconDiv>

          <StyledIconDiv>
            <StyledIcon src={iconDevices} />
            <StyledIconText>Go to site &rarr;</StyledIconText>
          </StyledIconDiv>
        </StyledIconContainer>
      </StyledProjectContainer>
    </>
  );
}

Project.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  skills: PropTypes.array,
};

export default Project;
