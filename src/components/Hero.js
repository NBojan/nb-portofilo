import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import SocialLinks from "./SocialLinks";

const Hero = () => {
    return (  
        <Wrapper className="page">
            <section className="containerBoot m-auto hero-cont">
                <div className="hero-info">
                    <header className="mb-24">
                        <div className="underline"></div>
                        <h1>I'm Bojan</h1>
                        <p className="desc">React and Javascript Web Developer on the <span>RISE</span></p>
                    </header>
                    <Link to="/contact" className="btn btn-l btn-prim capitalize mb-16">contact me</Link>
                    <SocialLinks />
                </div>

                <div className="hero-img">
                    <StaticImage src="../assets/images/hero.svg" alt="cool hero picture" layout="constrained" placeholder="blurred" />
                </div>
            </section>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    display: flex;
    padding: 32px 0;
    background: linear-gradient(90deg, rgba(224,252,255,1) 60%, rgba(255,255,255,1) 60%);

    .hero-cont {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .hero-info {
    
    }
    .hero-img {
        flex-basis: 60%;
    }

    .underline {
        margin: 0;
    }
    h1 {
        margin: 12px 0;
    }
    .desc {
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 1.5px;
        color: var(--clr-grey-3);
        span {
            text-decoration: underline;
        }
    }
    .social-links {
        display: flex;
        a {
            display: flex;
            color: var(--clr-black);
            font-size: 28px;
            margin-right: 12px;
            transition: all .1s linear;
        }
        a:hover {
            color: var(--clr-primary-5);
        }
    }

    

    @media (max-width: 991px){
        .hero-cont {
            flex-direction: column;
            align-items: stretch;
        }
        .hero-info {
            margin-bottom: 32px;
        }
        .hero-img {
            flex-basis: auto;
        }
    }
    @media (max-width: 767px){
        background: var(--clr-primary-10);

        .desc {
            font-size: 17px;
        }
        .social-links {
            a {
                font-size: 24px;
            }
        }
    }
    @media (max-width: 575px){
        .hero-cont {
            width: 90%;
        }
        .desc {
            font-size: 15px;
        }
    }
    @media (max-width: 400px){
        padding: 48px 0;
        .desc {
            font-size: 14px;
        }
    }
`
export default Hero;