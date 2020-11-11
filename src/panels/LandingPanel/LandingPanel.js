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
  padding: 0 40px;

  ${breakpoint("md")`
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
  font-size: 2em;
  line-height: 1.2em;
  ${breakpoint("md")`
    line-height: 1.5em;
  `}
`;

const StyledTitleMedium = styled(StyledTitle)`
  margin: 40px 0 !important;
  display: block;
  ${breakpoint("md")`
    display: block;
  `}
`;

const StyledCallToAction = styled.h2`
  font-family: "Permanent Marker", "sarif";
  color: ${purple[300]};
  text-decoration: underline ${purple[800]};
`;

const StyledHighlightedTextDark = styled.span`
  color: purple;
`;

const StyledHighlightedTextLight = styled.span`
  color: #51f7d1;
`;

const StyledLeadText = styled.p`
  font-family: "Merriweather", "sarif";
  font-weight: 300;
  color: rgba(35, 36, 38, 0.8);
  line-height: 1.2em;

  ${breakpoint("md")`
   font-size: 1em;
  `}
  ${breakpoint("xl")`
   font-size: 1.2em;
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

      <StyledContentPanel>
        <div>
          <StyledTitleMedium>
            Hi I'm{" "}
            <StyledHighlightedTextDark>
              Daniel Gardiner
            </StyledHighlightedTextDark>{" "}
            <br />a Web Developer based in Bristol
          </StyledTitleMedium>
          <StyledLeadText>
            Welcome to my portfolio website, please take a look at some of the
            projects I'm proud to have worked on
          </StyledLeadText>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StyledCallToAction>Find out more</StyledCallToAction>
          <StyledIconOuterContainerContent>
            <StyledIconInnerContainer>
              {/* <IconGithub fill="red" /> */}
              <img src={iconGithub} />
              <img src={iconLinkedIn} />
              <img src={iconDocument} />
            </StyledIconInnerContainer>
          </StyledIconOuterContainerContent>
        </div>

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
