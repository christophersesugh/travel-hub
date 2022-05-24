import React from "react";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <span>Copyright &copy; 2022 Travel hub. All rights reserved.</span>
      <ul className="links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#recommend">Places</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
      </ul>
      <ul className="social__links">
        <li>
          <a href="#home">
            <BsLinkedin className="svg" />
          </a>
        </li>
        <li>
          <a href="#services">
            <BsFacebook className="svg" />
          </a>
        </li>
        <li>
          <a href="#services">
            <AiFillInstagram className="svg" />
          </a>
        </li>
      </ul>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  background-color: #d0d8ff;
  padding: 2.5rem;
  border-radius: 0.5rem;
  ul {
    display: flex;
    gap: 2rem;
    li {
      a {
        color: black;
        transition: 0.3s all linear;
        &:hover {
          color: #302ce9;
        }
      }
      .svg {
        font-size: 1.3rem;
        transition: 0.3s all linear;
        &:hover {
          color: #302ce9;
        }
      }
    }
  }
`;
