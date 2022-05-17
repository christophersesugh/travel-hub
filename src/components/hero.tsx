import React from "react";
import styled from "styled-components";
import hero from "assets/hero.png";

export default function Hero() {
  function handleSubmit(event: React.SyntheticEvent<EventTarget>) {
    event.preventDefault();
  }
  return (
    <Section id="hero">
      <div className="background">
        <img src={hero} alt="Hero" />
      </div>
      <div className="content">
        <div className="title">
          <h1>travel to explore</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
            tempora et, iusto praesentium dolor obcaecati amet harum numquam?
            Voluptatem, consequatur repellendus neque tempora optio debitis.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="search-form">
          <div className="container">
            <label htmlFor="search">Where you want to go!</label>
            <input
              type="text"
              placeholder="Search your location."
              id="search"
            />
          </div>
          <div className="container">
            <label htmlFor="check-in">Check in</label>
            <input type="date" id="check-in" />
          </div>
          <div className="container">
            <label htmlFor="search-form">Check out</label>
            <input type="date" id="check-out" />
          </div>
          <button type="submit">explore now</button>
        </form>
      </div>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100%;
  .background {
    height: 100%;
    img {
      width: 100%;
      filter: brightness(60%);
    }
  }
  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .title {
      color: ${(props) => props.theme.primaryColor};
      h1 {
        font-size: 3rem;
        letter-spacing: 0.2rem;
        text-transform: uppercase;
      }
      p {
        text-align: center;
        padding: 0 30vw;
        margin-top: 0.2rem;
        font-size: 1.2rem;
      }
    }
    .search-form {
      display: flex;
      background-color: #ffffffce;
      padding: 0.5rem;
      border-radius: 0.5rem;
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1.5rem;
        label {
          font-size: 1.1rem;
          color: #03045e;
        }
        input {
          background-color: transparent;
          border: none;
          text-align: center;
          color: black;
          &[type="date"] {
            padding-left: 1rem;
          }
          &::placeholder {
            color: black;
          }
          &:focus {
            outline: none;
          }
        }
      }
      button {
        cursor: pointer;
        padding: 1rem;
        border-radius: ${(props) => props.theme.borderRadius1};
        background-color: #4361ee;
        color: white;
        font-size: 1.1rem;
        border: none;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #023e8a;
        }
      }
    }
  }
`;
