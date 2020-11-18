import React from "react";
import styled from "styled-components";
import useProjects from "../../hooks/useProjects";
import Project from "../../components/Project/Project";
import { grey } from "../../theme/colors/colors";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import SectionLeadText from "../../components/SectionLeadText/SectionLeadText";
import { breakpoint } from "../../utils/breakpoints/breakpoints";

const StyledProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${grey[100]};
  margin: 0 0 100px 0;
`;

const StyledProject = styled.div`
  padding: 20px;
  width: 100%;

  ${breakpoint("md")`
    width: 50%;
  `}
`;

const StyledFullWidth = styled.div`
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  width: 100vw;
  background-color: white;
  height: 300px;
`;

function ProjectPanel() {
  const projects = useProjects();

  return (
    <>
      <SectionHeading
        title={"REACT NEW BUILDS"}
        style={{ marginTop: "40px" }}
      />
      <SectionLeadText
        text={
          "Here are two applications I have built using React whilst working as a web developer at Nudge Digital"
        }
      />
      <StyledProjectContainer>
        {projects
          .filter((project) => project.section === "Drupal support")
          .map((project, index) => {
            return (
              <StyledProject key={index}>
                <Project
                  title={project.title}
                  description={project.description}
                  skills={project.skills}
                  imageColorPalette={index % 2 == 0}
                />
              </StyledProject>
            );
          })}
      </StyledProjectContainer>
      <StyledFullWidth>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut
          </p>
        </div>
      </StyledFullWidth>
      <SectionHeading title={"DRUPAL SUPPORT PROJECTS"} />
      <SectionLeadText
        text={
          "Here are two applications I have built using React whilst working as a web developer at Nudge Digital"
        }
      />
      <StyledProjectContainer>
        {projects
          .filter((project) => project.section === "Drupal support")
          .map((project, index) => {
            return (
              <StyledProject key={index}>
                <Project
                  title={project.title}
                  description={project.description}
                  skills={project.skills}
                  imageColorPalette={index % 2 == 0}
                />
              </StyledProject>
            );
          })}
      </StyledProjectContainer>
    </>
  );
}

export default ProjectPanel;
