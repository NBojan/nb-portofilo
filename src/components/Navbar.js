import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import links from "../constants/links";
import { AiOutlineAlignRight } from "react-icons/ai";
import { Link } from "gatsby";

const Navbar = ({ toggleSide }) => {
    return (  
        <Wrapper>
            <nav className="containerBoot m-auto">
                <div className="logo">
                    <img src={logo} alt="NbDev" />
                </div>
                
                <div className="links">
                    {links.map(link => <Link to={link.url} key={link.id}>{link.text}</Link>)}
                </div>

                <button type="button" className="btn burger-btn" onClick={toggleSide}> <AiOutlineAlignRight /></button>
            </nav>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    display: flex;
    height: 5rem;
    background: linear-gradient(90deg, rgba(224,252,255,1) 60%, rgba(255,255,255,1) 60%);

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    .burger-btn {
        display: none;
        font-size: 42px;
        color: var(--clr-primary-5);
    }
    .burger-btn:hover {
        color: var(--clr-primary-1);
    }

    .links {
        display: flex;
        align-items: center;
        a {
            display: block;
            font-size: 20px;
            font-weight: 500;
            margin-right: 32px;
            letter-spacing: 1px;
            color: var(--clr-black);
            text-transform: capitalize;
            transition: all .1s linear;
            font-family: var(--headingFont);
        }
    }
    .links a:hover {
        color: var(--clr-primary-5);
        box-shadow: 0 2px var(--clr-primary-5);
    }


    @media (max-width: 767px){
        background: #fff;
        .links {
            display: none;
        }
        .burger-btn {
            display: flex;
        }
    }
    @media (max-width: 575px){
        nav {
            width: 90%;
        }
    }
`
export default Navbar;