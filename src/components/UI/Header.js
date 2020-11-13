import React from "react";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";


const Content = styled.div`
  background-color: white;
  border-color: #dee2e6;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  box-shadow: 0 4px 4px -4px rgba(0, 0, 0, 0.2);
  height: 50px;
  width: ${window.innerWidth - 52 + "px"};
  position: fixed;
  z-index:9997;
  top: 0px;
  left: 47px;
`;

const Logo = styled.span`
  font-size: 24px;
  background: ${(props) => props.theme.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-left: 0px;
  font-weight: 700;
  font-family: "Kanit";
`;

const Header = ({ children }) => {
  return (
    <Content>
      <Logo>
        {children}
      </Logo>
    </Content>
  );
};

export { Header };
