import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Project = ({ title, url, github, slug, image, codes: {codes}, description: {description}, index }) => {
    const order = index % 2 === 0 ? "normal" : "inverse";

    return (  
        <Wrapper className={order}>
            <div className="img-div">
                <GatsbyImage image={getImage(image)} alt="cool looking picture" className="project-img" />
            </div>

            <div className="info-div">
                <p className="index">{index < 9 ? `0${index + 1}` : index + 1}.</p>
                <Link to={`/projects/${slug}`} className="name">
                    <h4 className="uppercase">{title}</h4>
                </Link>
                <p className="desc">{description}</p>
                <div className="codes">
                    {codes.map((code, index) => <button className="btn btn-s btn-dark uppercase mr-8" key={index}>{code}</button>)}
                </div>
                <div className="links">
                    <a href={github}> <AiFillGithub /></a>
                    <a href={url}> <FiExternalLink /></a>
                </div>
            </div>
        </Wrapper>
    );
}
 
const Wrapper = styled.div`
    margin-bottom: 48px;
    display: flex;
    align-items: center;
    :hover .img-div::after {
        opacity: 0;
    }

    .img-div {
        flex-basis: 50%;
        position: relative;
        height: 400px;
        transition: all .2s ease;
    }
    .info-div {
        flex-basis: 45%;
        z-index: 1;
        padding: 16px 32px;
        border-radius: 4px;
        background-color: #fff;
        box-shadow: var(--dark-shadow);
    }

    .img-div::after {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: .6;
        transition: all .2s linear;
        background: linear-gradient(to bottom right, var(--clr-primary-5), var(--clr-primary-10));
    }
    .project-img {
        display: flex;
        border-radius: 4px;
        box-shadow: var(--dark-shadow);
        height: 100%;
    }

    
    .index {
        font-size: 18px;
        color: var(--clr-primary-5);
    }
    .name {
        display: block;
        margin: 12px 0;
        h4 {
            margin: 0;
            transition: all .2s ease;
        }
    }
    .name:hover h4 {
        color: var(--clr-primary-5);
    }
    .desc {
        color: var(--clr-grey-3);
    }
    .codes {
        display: flex;
        flex-wrap: wrap;
        margin: 12px 0;
    }
    .links {
        display: flex;
    }
    .links a {
        display: flex;
        color: var(--clr-primary-5);
        margin-right: 8px;
        font-size: 24px;
    }

    @media (max-width: 1199px) and (min-width: 992px){
        .img-div {
            height: 500px;
        }
    }
    @media (max-width: 991px){
        flex-direction: column;
        align-items: stretch;

        .info-div {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
        }
        .project-img {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }
    }
    @media (max-width: 767px){
        .info-div {
            padding: 12px 24px;
        }
        .desc {
            font-size: 15px;
        }
    }
    @media (max-width: 575px){
        .desc {
            font-size: 14px;
        }
    }
    
`
export default Project;