import React from "react";
import styled from "styled-components";
import { FaAngleDoubleRight } from "react-icons/fa";

const CompExp = ({ company, position, date, description: {description} }) => {
    return (  
        <Wrapper>
            <h3 className="position">{position}</h3>
            <div className="btn btn-s btn-dark capitalize">{company}</div>
            <p className="date capitalize">{date}</p>

            <ul className="roles">
                {description.map((item, index) => (
                    <li className="role" key={index}>
                        <span><FaAngleDoubleRight /></span>
                        <p>{item}</p>
                    </li>
                ))}
            </ul>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    flex: 1;

    .position {
        text-transform: capitalize;
    }
    
    .date {
        font-size: 18px;
        margin: 12px 0 16px;
        color: var(--clr-grey-3);
    }
    .role {
        display: flex;
        align-items: center;
        font-size: 17px;
        margin-bottom: 12px;
        color: var(--clr-grey-3);
        span {
            display: flex;
            margin-right: 16px;
            color: var(--clr-primary-5);
        }
    }
    @media (max-width: 767px){
        .date {
            font-size: 17px;
        }
        .role {
            font-size: 16px;
        }
    }
    @media (max-width: 575px){
        .date {
            font-size: 15px;
        }
        .role {
            font-size: 14px;
        }
    }
`
export default CompExp;