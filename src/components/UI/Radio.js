import styled, { css } from "styled-components";
import React from "react";

const Container = styled.div`
  border-color: rgb(208, 208, 208);
  min-width: 140px;
  height: 45px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

const Content = styled.div`
  border-width: 2px;
  border-style: solid;
  border-color: rgb(208, 208, 208);
  display: flex;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: ${(props) => props.theme.primary};
  }

  ${(props) =>
    props.checked &&
    css`
      border-color: ${(props) => props.theme.primary};
      color: ${(props) => props.theme.primary};
      border-width: 2px;
      border-style: solid;
    `};
`;

const Checked = styled.div`
  border: none;
  background-color: ${(props) => props.theme.primary};
  display: flex;
  width: 10px;
  height: 10px;
  border-radius: 50%;

  &:hover {
    border-color: ${(props) => props.theme.primary};
  }
`;

const Text = styled.span`
  margin-left: 4px;
  font-family: ${(props) => props.theme.font};
  font-size: 0.8em;
  color: rgba(0, 0, 0, 0.9);
`;

export function Radio({ children, checked, onClick }) {
  return (
    <Container onClick={onClick}>
      {checked ? (
        <Content checked={checked}>
          <Checked />
        </Content>
      ) : (
        <Content></Content>
      )}

      <Text>{children}</Text>
    </Container>
  );
}
