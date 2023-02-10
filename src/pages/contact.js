import React from "react";
import styled from "styled-components";

const Contact = () => {
    return (  
        <Wrapper className="page">
            <section className="containerBoot m-auto form-cont">
                <form>
                    <div className="form-body">
                        <h3 className="capitalize ta-center">get in touch</h3>
                        <div className="form-control">
                            <input type="text" name="name" id="name" placeholder="name" className="input-style" />
                        </div>
                        <div className="form-control">
                            <input type="email" name="email" id="email" placeholder="email" className="input-style" />
                        </div>
                        <div className="form-control">
                            <textarea className="input-style" name="message" id="message" placeholder="message"></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-m btn-prim submit-btn">submit</button>
                </form>
            </section>
        </Wrapper>
    );
}

const Wrapper = styled.main`
    display: flex;
    padding: 32px 0;
    background-color: var(--clr-grey-10);

    .form-cont {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    form {
        width: 100%;
        max-width: 500px;
        box-shadow: var(--light-shadow);
        transition: all .2s ease;
    }
    form:hover {
        box-shadow: var(--dark-shadow);
    }
    .form-body {
        padding: 16px;
        background-color: #fff;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        
    }
    h3 {
        color: var(--clr-grey-5);
        margin-bottom: 24px;
    }

    .form-control {
        margin-bottom: 16px;
    }
    .input-style {
        width: 100%;
        padding: 12px;
        font-size: 16px;
        border-radius: 4px;
        border: transparent;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        background-color: var(--clr-grey-10);
    }

    .submit-btn {
        width: 100%;
        text-transform: uppercase;
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
    }
    @media (max-width: 575px){
        .form-cont {
            width: 90%;
        }
        .input-style {
            font-size: 15px;
        }
    }

`
export default Contact;