import React from "react";
import styled from "styled-components";
import { breakpoint } from "../../utils/breakpoints/breakpoints";
import { grey, purple } from "../../theme/colors/colors";
import ProfileImage from "../../../images/img_dg_profile.png";
import { ReactComponent as IconGithub } from "../../../images/icon_github.svg";
import iconGithub from "../../../images/icon_github.svg";
import iconDocument from "../../../images/icon_document.svg";
import iconLinkedIn from "../../../images/icon_linkedin.svg";
import iconEmail from "../../../images/icon_email.svg";
import iconMobile from "../../../images/icon_mobile.svg";
import { fluidType } from "../../utils/functions/functions";

const StyledLandingPanelContainer = styled.div`
  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  ${breakpoint("md")`
    flex-direction: row;
    height: 100vh;
  `}
`;

const StyledImgPanel = styled.div`
  background-color: ${grey[200]};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-top: 50px;

  ${breakpoint("md")`
    width: 50%;
  `};
`;

const StyledImg = styled.img`
  height: auto;
  width: 100%;

  ${breakpoint("sm")`
    // width: 125%;
    // margin-right: -45px;
  `};
`;

const StyledIconOuterContainer = styled.div`
  width: 50%;
  margin: 0 auto;
`;

const StyledIconOuterContainerImg = styled(StyledIconOuterContainer)`
  display: block;
  ${breakpoint("md")`
    display: none;
  `};
`;

const StyledIconOuterContainerContent = styled(StyledIconOuterContainer)`
  display: none;
  ${breakpoint("md")`
    display: block;
  `};
`;

const StyledIconInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledContentPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 40px 30px 40px;
  height: 350px;

  ${breakpoint("md")`
    height: auto;
    width: 50%;
    padding: 30px;
  `}

  ${breakpoint("lg")`
    padding: 60px;
  `}
`;

const StyledTitle = styled.h1`
  padding-top: 10px;
  font-weight: 100;
  color: black;
  line-height: 1.2em;

  ${breakpoint("lg")`
    line-height: 1.2em;
  `}
`;

const StyledTitleSmall = styled(StyledTitle)`
  background: linear-gradient(180deg, ${grey[200]}, transparent);
  padding: "20px 40px 10px 40px";
  display: block;

  font-size: ${fluidType({
    minFontSize: "22px",
    maxFontSize: "43px",
    maxVw: "690px",
  })};

  ${breakpoint("md")`
    display: none;
  `}
`;

const StyledTitleMedium = styled(StyledTitle)`
  margin: 40px 0 !important;
  display: none;
  ${breakpoint("md")`
    display: block;
    font-size: ${fluidType({
      minFontSize: "30px",
      maxFontSize: "46px",
      minVw: "690px",
    })};
  `}
`;

const StyledCallToActionContainer = styled.div`
  display: "flex";
  flex-direction: "column";
  justify-content: "center";
  align-items: "center";

  ${breakpoint("md")`
    margin-top: -100px;
  `};
`;

const StyledCallToAction = styled.h2`
  text-align: center;
  font-family: "Permanent Marker", "sarif";
  color: ${purple[300]};
  text-decoration: underline ${purple[800]};

  font-size: ${fluidType({
    minFontSize: "19px",
    maxFontSize: "42px",
    maxVw: "690px",
  })};

  ${breakpoint("md")`
    font-size: ${fluidType({
      minFontSize: "33px",
      maxFontSize: "46px",
      minVw: "690px",
    })};
    margin-bottom: 30px;
  `}
`;

const StyledHighlightedText = styled.span`
  color: ${purple[800]};
  ${breakpoint("md")`
    color: ${purple[300]};
    font-weight: bold;
  `}
`;

const StyledLeadText = styled.p`
  font-family: "Merriweather", "sarif";
  font-weight: 300;
  color: rgba(35, 36, 38, 0.8);
  line-height: 1.2em;
  font-size: ${fluidType({
    minFontSize: "14px",
    maxFontSize: "26px",
    maxVw: "690px",
  })};

  ${breakpoint("md")`
    font-size: ${fluidType({
      minFontSize: "19px",
      maxFontSize: "24px",
      minVw: "690px",
    })};
  `}
`;

function LandingPanel() {
  return (
    <StyledLandingPanelContainer>
      <StyledImgPanel>
        <StyledIconOuterContainerImg>
          <StyledIconInnerContainer>
            {/* <IconGithub /> */}
            <img src={iconGithub} />
            <img src={iconLinkedIn} />
            <img src={iconDocument} />
          </StyledIconInnerContainer>
        </StyledIconOuterContainerImg>
        <StyledImg
          src={ProfileImage}
          alt="black and white photograph of daniel gardiner"
        />
      </StyledImgPanel>

      <StyledTitleSmall>
        <div style={{ padding: "20px 40px 5px 40px" }}>
          Hi I'm <StyledHighlightedText>Daniel Gardiner</StyledHighlightedText>{" "}
          <br />a Web Developer based in Bristol
        </div>
      </StyledTitleSmall>

      <StyledContentPanel>
        <div>
          <StyledTitleMedium>
            Hi I'm{" "}
            <StyledHighlightedText>Daniel Gardiner</StyledHighlightedText>{" "}
            <br />a Web Developer based in Bristol
          </StyledTitleMedium>
          <StyledLeadText>
            Welcome to my portfolio website, please take a look at some of the
            projects I'm proud to have worked on
          </StyledLeadText>
        </div>

        <StyledCallToActionContainer>
          <StyledCallToAction>Find out more</StyledCallToAction>
          <StyledIconOuterContainerContent>
            <StyledIconInnerContainer>
              <img src={iconGithub} />
              <img src={iconLinkedIn} />
              <img src={iconDocument} />
            </StyledIconInnerContainer>
          </StyledIconOuterContainerContent>
        </StyledCallToActionContainer>

        <div>
          <p>Get in contact</p>
          <div style={{ display: "flex" }}>
            <img src={iconEmail} />
            <p>daniel.gardiner.tech@gmail.com</p>
          </div>
          <div style={{ display: "flex" }}>
            <img src={iconMobile} />
            <p>07432656274</p>
          </div>
        </div>
      </StyledContentPanel>
    </StyledLandingPanelContainer>
  );
}

export default LandingPanel;
