import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const ErrorPage = () => {
    return (
        <Wrapper className="page">
            <section className="containerBoot m-auto error-cont">
                <h1 className="mb-32">This page does not exist..</h1>
                <Link to="/" className="btn btn-m btn-prim capitalize">back home</Link>
            </section>
        </Wrapper>
    )
}

const Wrapper = styled.main`
    display: flex;
    padding: 32px 0;
    background-color: var(--clr-primary-10);

    .error-cont {
        width: 100%;
        display: flex;
        text-align: center;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }

    @media (max-width: 575px){
        .error-cont {
            width: 90%;
        }
        h1 {
            font-size: 24px;
        }
    }
`

export default ErrorPage