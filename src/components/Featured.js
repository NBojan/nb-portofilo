import React from "react";
import Title from "./Title";
import Projects from "./Projects";
import styled from "styled-components";
import { graphql, Link, useStaticQuery } from "gatsby";

const Featured = () => {
    const data = useStaticQuery(query);

    return (  
        <Wrapper>
            <section className="containerBoot m-auto">
                <Title title="featured projects" />

                <Projects projects={data.allContentfulProjects.nodes} />

                <div className="d-flex justify-center">
                    <Link to="/projects" className="btn btn-l btn-prim uppercase">projects</Link>
                </div>
            </section>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    padding: 80px 0;
    background-color: var(--clr-grey-10);
` 

export const query = graphql`
  query {
    allContentfulProjects(filter: {featured: {eq: true}}) {
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

export default Featured;