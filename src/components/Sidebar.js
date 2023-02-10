import React from "react";
import styled from "styled-components";
import links from "../constants/links";
import SocialLinks from "./SocialLinks";
import { Link } from "gatsby";
import { AiFillCloseCircle } from "react-icons/ai";

const Sidebar = ({ showSide, toggleSide }) => {
    return (  
        <Wrapper className={showSide ? "sidebar show-side" : "sidebar"}>
            <button type="button" className="btn close-btn" onClick={toggleSide}><AiFillCloseCircle /></button>

            <div className={showSide ? "container show-cont" : "container"}>
                <div className="links">
                    {links.map((link, index) => {
                        const delay = (index + 1) / 7.5;
                        return (
                            <Link to={link.url} key={link.id} onClick={toggleSide} className="link" style={{animationDelay: `${delay}s`}}>
                                {link.text}
                            </Link>
                        )
                        })}
                </div>

                <SocialLinks />
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--clr-grey-10);
    z-index: 2;
    transition: all .3s ease;

    .close-btn {
        position: absolute;
        display: flex;
        top: 32px;
        right: 32px;
        z-index: 1;
        color: var(--clr-red-dark);
        svg {
            font-size: 28px;
        }
    }
    .close-btn:hover {
        color: var(--clr-red-light);
    }

    .container {
        width: 100%;
        height: 100%;
        max-width: 420px;
        margin: 0 auto;
        display: none;
        flex-direction: column;
        justify-content: center;
    }

    .links {
        margin-bottom: 16px;
    }
    .link {
        display: block;
        font-size: 24px;
        padding: 8px;
        margin-bottom: 8px;
        text-align: center;
        color: var(--clr-grey-3);
        text-transform: capitalize;
        transition: all .2s linear;
        opacity: 0;
        transform: translateX(-200px);
        animation: slideRight .3s ease forwards;
    }
    .link:hover {
        color: var(--clr-primary-5);
        background-color: var(--clr-primary-9);
    }

    .social-links {
        display: flex;
        justify-content: space-around;
        a {
            display: flex;
            color: var(--clr-black);
            font-size: 28px;
            transition: all .1s linear;
            opacity: 0;
            transform: translateY(200px);
            animation: slideUp .6s ease forwards;
        }
        a:hover {
            color: var(--clr-primary-5);
        }
        a:nth-child(1){
            animation-delay: .1s;
        }
        a:nth-child(2){
            animation-delay: .2s;
        }
        a:nth-child(3){
            animation-delay: .3s;
        }
        a:nth-child(4){
            animation-delay: .4s;
        }
    }

    @media (max-width: 575px){
        .link {
            font-size: 20px;
        }
        .social-links {
            a {
                font-size: 24px;
            }
        }
    }

    @keyframes slideRight {
        0% {
            opacity: 0;
            transform: translateX(-200px);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }
    @keyframes slideUp {
        0% {
            opacity: 0;
            transform: translateY(200px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
`

export default Sidebar;