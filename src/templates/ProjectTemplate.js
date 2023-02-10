import React from "react";
import styled from "styled-components";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ProjectTemplate = ({ data }) => {
    const {title, description: {description}, image} = data.contentfulProjects;

    return (  
        <Wrapper className="page">
            <section className="containerBoot m-auto">
                <div className="card">
                    <div className="title">
                        <h2>{title ? title : "default title"}</h2>  
                    </div>
                    
                    <p>{description}</p>

                    <GatsbyImage image={getImage(image)} alt="great looking image" className="project-img" />

                    <Link className="btn btn-m btn-prim capitalize">back to projects</Link>
                </div>
            </section>
        </Wrapper>
    );
}

const Wrapper = styled.main`
    padding: 32px 0;
    background-color: var(--clr-grey-10);

    .card {
        display: flex;
        max-width: 600px;
        margin: 0 auto;
        flex-direction: column;
        align-items: center;
    }

    .project-img {
        margin: 32px 0;
        border-radius: 4px;
        box-shadow: var(--light-shadow);
    }
`

export const query = graphql`
  query ($slug: String) {
    contentfulProjects(slug: {eq: $slug}) {
      title
      description {
        description
      }
      image {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
      }
    }
  }
`

export default ProjectTemplate;