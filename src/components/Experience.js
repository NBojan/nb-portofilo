import React, { useState } from "react";
import Title from "./Title";
import CompExp from "./CompExp";
import styled from "styled-components";
import { graphql, Link, useStaticQuery } from "gatsby";

const Experience = () => {
    const { allContentfulJobs: {nodes: jobs} } = useStaticQuery(query);
    const [value, setValue] = useState(0);

    return (  
        <Wrapper>
            <section className="containerBoot m-auto">
                <Title title="experience" />

                <div className="experience-cont">
                    <div className="companies">
                      {jobs.map((job,index) => (
                        <button key={index} className={index === value ? "company act-comp" : "company"} onClick={() => setValue(index)}>{job.company}</button>
                      ))}
                    </div>

                    <CompExp {...jobs[value]} />
                </div>

                <div className="d-flex justify-center">
                  <Link to="/about" className="btn btn-l btn-prim capitalize">more info</Link>
                </div>
            </section>
        </Wrapper>
    );
}
 
const Wrapper = styled.section`
    padding: 80px 0;
    background-color: #fff;

    .experience-cont {
        margin: 48px 0;
        display: flex;
        justify-content: space-between;
    }

    .companies {
        display: flex;
        flex-direction: column;
        width: 200px;
        margin-right: 96px;
    }
    .company {
      display: block;
      padding: 12px 0;
      font-size: 18px;
      margin-bottom: 8px;
      letter-spacing: 1.5px;
      border: transparent;
      text-transform: capitalize;
      background-color: transparent;
      transition: all .2s ease;
      cursor: pointer;
    }
    .company:hover {
      color: var(--clr-primary-5);
      box-shadow: -2px 0 var(--clr-primary-5);
    }
    .act-comp {
      color: var(--clr-primary-5);
      box-shadow: -2px 0 var(--clr-primary-5);
    }

    @media (max-width: 991px){
      .experience-cont {
        flex-direction: column;
      }

      .companies {
        flex-direction: row;
        justify-content: center;
        width: 100%;
        margin-bottom: 48px;
      }
      .company {
        margin: 0 16px 0 0;
        font-size: 17px;
      }
      .company:hover {
        box-shadow: 0 2px var(--clr-primary-5);
      }
      .act-comp {
        box-shadow: 0 2px var(--clr-primary-5);
      }      
    }
    @media (max-width: 767px){
      .company {
        font-size: 16px;
        letter-spacing: 1px;
      }
    }
    @media (max-width: 575px){
      .company {
        font-size: 14px;
      }
    }
    @media (max-width: 575px){
      .company {
        letter-spacing: .5px;
      }
    }
`


const query = graphql`
  query {
    allContentfulJobs {
      nodes {
        company
        position
        date
        description {
          description
        }
      }
    }
  }
`

export default Experience;