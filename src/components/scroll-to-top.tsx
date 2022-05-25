import * as React from "react";
import logo from "assets/logo.png";
import styled from "styled-components";

export default function ScrollToTop() {
  const [scroll, setScroll] = React.useState(false)
  return (
    <ToTop>
      <img src={logo} alt="logo" />
    </ToTop>
  );
}

const ToTop = styled.div`

`;
