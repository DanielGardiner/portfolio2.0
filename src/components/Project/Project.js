import React from "react";
import PropTypes from "prop-types";
import Image from "gatsby-image";
import styled from "styled-components";
import iconReact from "../../../images/icon_react.svg";
import iconGithub from "../../../images/icon_github2.svg";
import iconDevices from "../../../images/icon_devices.svg";
import { blue } from "../../theme/colors/colors";

const StyledProjectImageContainer = styled.div`
  background: linear-gradient(90deg, #d68cdc 0%, #89aeff 100%);
  /* background: linear-gradient(135deg, #f395ba 0%, #fed182 100%); */
  border-radius: 16px 16px 0 0;
  height: 150px;
`;

const StyledProjectContainer = styled.div`
  background: #ffffff;
  border-radius: 0 0 16px 16px;

  padding: 40px;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.1);
`;

const StyledTitle = styled.h3`
  font-size: 25px;
  margin: 0 20px 0 20px;
  font-family: "DM Serif Display", serif;
`;

const StyledIconText = styled.p`
  color: ${blue[400]};
  font-family: "Open Sans", sans-serif;
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
        <p>{skills}</p>
        <p>{description}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={iconReact} style={{ width: "70px", height: "50px" }} />
            <StyledIconText>React</StyledIconText>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={iconGithub} style={{ width: "70px", height: "50px" }} />
            <StyledIconText>Go to code</StyledIconText>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={iconDevices} style={{ width: "70px", height: "50px" }} />
            <StyledIconText>Go to site</StyledIconText>
          </div>
        </div>
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
