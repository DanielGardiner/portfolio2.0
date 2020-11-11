import React from "react";
import styled from "styled-components";
import useProjects from "../../hooks/useProjects";
import Project from "../../components/Project/Project";
import { grey } from "../../theme/colors/colors";

const StyledProjectContainer = styled.div`
  display: flex;
  background-color: ${grey[100]};
`;

const StyledProject = styled.div`
  padding: 20px;
  width: 30%;
`;

function ProjectPanel() {
  const projects = useProjects();

  return (
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
              />
            </StyledProject>
          );
        })}
    </StyledProjectContainer>
  );
}

export default ProjectPanel;
