import React from "react";
import { testimonials } from "constants/testimonials";
import styled from "styled-components";

export default function Testimonial() {
  return (
    <Section>
      <div className="title">
        <h2>Happy Customers</h2>
      </div>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial" key={index}>
            <p>{testimonial.body}</p>
            <div className="info">
              <img src={testimonial.img} alt="customers" />
              <div className="details">
                <h4>{testimonial.name}</h4>
                <span>{testimonial.position}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s all linear;
      &:hover {
        transform: translateX(1.5rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        margin-top: 1rem;
        img {
          height: 3rem;
          border-radius: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        text-align: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
