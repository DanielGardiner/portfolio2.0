import React from "react";
import styled from "styled-components";
import useProjects from "../../hooks/useProjects";
import Project from "../../components/Project/Project";

const StyledProjectContainer = styled.div`
  display: flex;
`;
const StyledProject = styled.div`
  padding: 20px;
  width: 50%;
`;

function ProjectPanel() {
  const projects = useProjects();
  console.log(projects);
  return (
    <StyledProjectContainer>
      {projects.map((project, index) => {
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
