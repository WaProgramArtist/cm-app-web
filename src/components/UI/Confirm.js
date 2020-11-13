import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const Container = styled.div`
  font-family: ${(props) => props.theme.font};
  width: ${window.innerWidth + "px"};
  height: ${window.innerHeight + "px"};
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  position: fixed;
  z-index: 9998;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Content = styled.div`
  font-family: ${(props) => props.theme.font};
  width: 400px;
  min-height: 100px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
`;

const Header = styled.div`
  font-family: ${(props) => props.theme.font};
  height: 45px;
  box-shadow: 0 4px 4px -4px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Body = styled.div`
  min-height: 80px;
  padding: 20px;
  padding-top: 0px;
  font-family: ${(props) => props.theme.font};
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 10px;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: rgb(214, 214, 214);
`;

const TextHeader = styled.span`
  font-size: 24px;
  background: ${(props) => props.theme.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-left: 0px;
  font-weight: 700;
  font-family: "Kanit";
`;

export const Confirm = ({ onClose, onConfirm, text }) => {
  return (
    <Container>
      <Content>
        <Header>
          <TextHeader>Confirm</TextHeader>
        </Header>
        <Body>{text ?? "Do you want to delete ?"}</Body>
        <Footer>
          <Button primary onClick={onConfirm}>
            Yes
          </Button>

          <Button onClick={onClose} style={{ marginLeft: 10 }}>
            No
          </Button>
        </Footer>
      </Content>
    </Container>
  );
};
