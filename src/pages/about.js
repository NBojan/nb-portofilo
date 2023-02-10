import React from "react";
import styled from "styled-components";
import Title from "../components/Title"; 
import newCodes from "../constants/newCodes";
import { graphql } from "gatsby";
import { Seo } from "../components/Seo"
import { StaticImage } from "gatsby-plugin-image";

export const query = graphql`
  query {
    allContentfulProjects {
      nodes {
        codes {
          codes
        }
      }
    }
  }
`

const About = ({ data }) => {
    const uniqueCodes = newCodes(data.allContentfulProjects.nodes);
    
    return (  
        <Wrapper className="page">
           <section className="containerBoot m-auto about-cont">
                <div className="img-cont">
                    <StaticImage src="../assets/images/hero.svg" alt="something cool" />
                </div>

                <div className="info-cont">
                    <Title title="about me" />
                    <p className="desc">
                        Salvia tousled chambray, shoreditch retro cliche dreamcatcher coloring book 
                        roof party keffiyeh small batch pork belly actually mlkshk shaman. Stumptown 
                        typewriter you probably haven't heard of them pork belly dreamcatcher umami woke, 
                        chambray snackwave craft beer. You probably haven't heard of them slow-carb trust 
                        fund thundercats bespoke live-edge forage echo park artisan coloring book. Semiotics 
                        af tumblr, health goth viral iPhone cold-pressed ugh kogi fanny pack. Photo booth 3 
                        wolf moon narwhal, marfa lumbersexual taiyaki biodiesel cloud bread slow-carb enamel 
                        pin stumptown taxidermy food truck 8-bit mustache. Pickled next level vaporware, 
                        brooklyn af sriracha hoodie try-hard flannel slow-carb raw denim.
                    </p>
                    <div className="codes">
                        {uniqueCodes.map((code,index) => <div key={index} className="btn btn-s btn-dark code">{code}</div>)}
                    </div>
                </div>
            </section> 
        </Wrapper>
    );
}
export const Head = () => {
    return <Seo title="About" />
}
const Wrapper = styled.main`
    display: flex;
    padding: 32px 0;
    background-color: var(--clr-grey-10);

    .about-cont {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .img-cont {
        flex-basis: 40%;
    }
    .info-cont {
        flex-basis: 52%;
    }
    .title {
        text-align: left;
        .underline {
            margin: 0;
        }
    }
    .desc {
        line-height: 2;
        font-size: 17px;
        letter-spacing: .5px;
        color: var(--clr-grey-3);
        margin-bottom: 12px;
    }

    .codes {
        display: flex;
        flex-wrap: wrap;
    }
    .code {
        margin-right: 8px;
        text-transform: capitalize;
    }

    @media (max-width: 991px){
        .about-cont {
            flex-direction: column;
        }
        .img-cont, .info-cont {
            flex-basis: 100%;
        }
        .img-cont {
            max-width: 500px;
            margin-bottom: 32px;
        }
    }
    @media (max-width: 767px){
        .desc {
            font-size: 16px;
        }
    }
    @media (max-width: 575px){
        .desc {
            font-size: 15px;
        }
        .code {
            margin-bottom: 8px;
        }
    }
`
export default About;