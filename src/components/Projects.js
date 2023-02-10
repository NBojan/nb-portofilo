import React from "react";
import styled from "styled-components";
import Project from "./Project";

const Projects = ({ projects }) => {
    return (  
        <Wrapper className="projects-cont">
            {projects.map((item, index) => <Project {...item} index={index} key={index} />)}
        </Wrapper>
    );
}
 
const Wrapper = styled.article`
    margin: 48px 0;
`
export default Projects;