import React from "react";
import Title from "./Title";
import styled from "styled-components";
import services from "../constants/services";

const Services = () => {
    return (  
        <Wrapper>
            <section className="containerBoot m-auto">
                <Title title="services" />

                <article className="services">
                    {services.map(service => (
                        <div key={service.id} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <div className="title">
                                <h4>{service.title}</h4>
                                <div className="underline"></div>
                            </div>
                            <p className="desc">{service.text}</p>
                        </div>
                    ))}
                </article>
            </section>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    padding: 80px 0;
    background-color: var(--clr-grey-10);

    .services {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 48px;
    }
    .service-card {
        flex-basis: 32%;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 48px 24px;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: var(--light-shadow);
        transition: all .3s ease;
    }
    .service-card:hover {
        background-color: var(--clr-primary-5);
    }
    .service-card:hover .service-icon,
    .service-card:hover h4,
    .service-card:hover .desc
     {
        color: var(--clr-primary-10);
    }
    .service-card:hover .underline {
        background-color: var(--clr-primary-10);;
    }
    

    .service-icon {
        display: flex;
        margin-bottom: 24px;
        svg {
            font-size: 28px;
            margin-bottom: 0;
        }
    }
    .desc {
        text-align: center;
        letter-spacing: .5px;
        color: var(--clr-grey-3);
    }

    @media (max-width: 991px){
        padding: 64px 0;
        .services {
            flex-wrap: wrap;
        }
        .service-card {
            flex-basis: 48%;
            margin-bottom: 32px;
        }
    }
    @media (max-width: 575px){
        padding: 48px 0;
        .service-card {
            flex-basis: 100%;
        }
        .desc {
            font-size: 15px;
        }
    }
    @media (max-width: 400px){
        .service-card {
            padding: 40px 20px;
        }
        .desc {
            font-size: 14px;
        }
    }
`
export default Services;