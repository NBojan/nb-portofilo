import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import Projects from "../components/Projects";
import { graphql } from "gatsby";
import { Seo } from "../components/Seo"

const ProjectsPage = ({ data }) => {
    const projects = data.allContentfulProjects.nodes;

    return (  
        <Wrapper className="page">
            <section className="containerBoot m-auto">
                <Title title="all projects" />

                <Projects projects={projects} />
            </section>
        </Wrapper>
    );
}

const Wrapper = styled.main`
    padding: 80px 0;
    background-color: var(--clr-grey-10);
`
export const Head = () => {
  return <Seo title="All Projects" />
}

export const query = graphql`
  query {
    allContentfulProjects {
      nodes {
        title
        github
        url
        slug
        codes {
          codes
        }
        description {
          description
        }
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
  }
`

export default ProjectsPage;