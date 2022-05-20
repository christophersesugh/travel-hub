import * as React from "react";
import styled from "styled-components";
import { recommend, packages } from "constants/recommend";

export default function Recommend() {
  const [activeTab, setActiveTab] = React.useState(1);
  return (
    <Section id="recommend">
      <h2 className="title">Recommended Destinations</h2>
      <div className="packages">
        <ul>
          {packages.map((pkg, index) => (
            <li
              className={activeTab === index + 1 ? "active" : ""}
              onClick={() => setActiveTab(index + 1)}
              key={index}
            >
              {pkg}
            </li>
          ))}
        </ul>
      </div>
      <div className="destinations">
        {recommend.map((dest, index) => (
          <div className="destination" key={index}>
            <img src={dest.imgage} alt={dest.title} />
            <h3>{dest.title}</h3>
            <p>{dest.subtitle}</p>
            <div className="info">
              <div className="services">
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
              <h4>${dest.cost}</h4>
            </div>
            <div className="distance">
              <span>1000 kms</span>
              <span>{dest.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
        cursor: pointer;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
        font-weight: 500;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(1.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        justify-content:space-between;
        display: flex;
        align-items: center;
        .services {
          img {
            width: 2rem;
            border-radius: 1rem;
            background-color: #4d2ddb84;
            padding: 0.2rem 0.4rem;
          }
          display: flex;
          justify-content:space-between
          gap: 0.3rem;
        }
      }
      .distance {
        display: flex;
        justify-content:space-between;
      }
    }
  }
`;
