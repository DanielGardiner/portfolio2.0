import { graphql, useStaticQuery } from "gatsby";

const useProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            description
            skills
            section
          }
          excerpt
        }
      }
    }
  `);

  return data.allMdx.nodes.map((project) => ({
    title: project.frontmatter.title,
    description: project.frontmatter.description,
    skills: project.frontmatter.skills,
    section: project.frontmatter.section,
    excerpt: project.excerpt,
  }));
};

export default useProjects;
