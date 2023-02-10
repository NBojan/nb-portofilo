import React from "react";
import styled from "styled-components";
import SocialLinks from "./SocialLinks";

const Footer = () => {
    return (  
        <Wrapper>
            <footer className="containerBoot m-auto">
                <SocialLinks />

                <p className="copyright">
                    copyright &#169; {new Date().getFullYear()}. <span>NbDev</span> all rights reserved
                </p>
            </footer>
        </Wrapper>
    );
}
 
const Wrapper = styled.section`
    height: 6rem;
    color: #fff;
    background-color: var(--clr-black);

    footer {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .social-links {
        display: flex;
        margin-bottom: 8px;
        a {
            display: flex;
            color: #fff;
            font-size: 20px;
            margin: 0 8px;
            transition: all .1s linear;
        }
        a:hover {
            color: var(--clr-primary-5);
        }
    }
    .copyright {
        text-transform: uppercase;
        span {
            color: var(--clr-primary-5);
        }
    }

    @media (max-width: 575px){
        .copyright {
            font-size: 14px;
        }
    }
`
export default Footer;