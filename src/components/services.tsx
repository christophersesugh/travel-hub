import React from "react";
import { services } from "constants/services";
import styled from "styled-components";

export default function Services() {
  return (
    <Section>
      {services.map((service, index) => (
        <div className="service" key={index}>
          <div className="icon">
            <img src={service.icon} alt={service.title} />
          </div>
          <h3>{service.title}</h3>
          <p>{service.subtitle}</p>
        </div>
      ))}
    </Section>
  );
}

const Section = styled.section`
  padding: 5rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  .service {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background-color: aliceblue;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .icon {
      img {
        height: 2.4rem;
      }
    }
  }
`;
