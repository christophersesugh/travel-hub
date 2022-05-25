import * as React from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import logo from "assets/logo.png";

const menuItems = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "Recommend",
    link: "#recommend",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

export default function Navbar() {
  const [closeNavbar, setCloseNavbar] = React.useState(false);

  return (
    <>
      <Nav>
        <div className="brand">
          <div className="container">
            <img src={logo} alt="logo" />
            Travel Hub
          </div>
          <div className="toggle">
            {closeNavbar ? (
              <VscChromeClose onClick={() => setCloseNavbar(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setCloseNavbar(true)} />
            )}
          </div>
        </div>
        <ul className="ul">
          {menuItems.map((menuItem) => (
            <li key={menuItem.link}>
              <a href={menuItem.link}>{menuItem.name}</a>
            </li>
          ))}
        </ul>
        <button>Connect</button>
      </Nav>
      {closeNavbar ? (
        <ResponsiveNav>
          <ul className="ul">
            {menuItems.map((menuItem) => (
              <li key={menuItem.link}>
                <a href={menuItem.link} onClick={() => setCloseNavbar(false)}>
                  {menuItem.name}
                </a>
              </li>
            ))}
          </ul>
        </ResponsiveNav>
      ) : null}
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .brand {
    .container {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
      font-size: 1.2rem;
      font-weight: 900;
      text-transform: uppercase;
    }
    .toggle {
      display: none;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .toggle {
        display: block;
        cursor: pointer;
      }
    }
    button,
    .ul {
      display: none;
    }
  }
  ul {
    display: flex;
    gap: 1rem;
    li {
      a {
        color: #0077b6;
        font-size: 1.2rem;
        transition: 0ms.1s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }
      &:first-of-type {
        a {
          color: #023e8a;
          font-weight: 900;
        }
      }
    }
  }
  button {
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: ${(props) => props.theme.borderRadius2};
    border: none;
    color: white;
    background-color: #48cae4;
    text-transform: uppercase;
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: #023e8a;
    }
  }
`;

const ResponsiveNav = styled.nav`
  display: flex;
  position: absolute;
  z-index: 999;
  background-color: white;
  width: 100%;
  height: auto;
  overflow: hidden;
  transition: 0.2s all linear;
  ul {
    width: 100%;
    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;
      a {
        color: #0077b6;
        font-size: 1.2rem;
        transition: 0.2s all linear;
        &:hover {
          color: #023e8a;
        }
      }
    }
  }
`;
