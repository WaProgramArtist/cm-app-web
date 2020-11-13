import styled, { css } from "styled-components";
import React from "react";

const Container = styled.div`
  width: 100%;
  margin-bottom: ${(props) => (props.inValid ? `5px` : `0px`)};
`;

const Content = styled.fieldset`
  border-width: 1px;
  border-style: solid;
  border-color: rgb(208, 208, 208);
  width: 100%;
  border-radius: 4px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  color: rgba(0, 0, 0, 0.54);
  font-size: 1rem;
  font-weight: 400;
  min-height: 60px;
  border-color: ${(props) =>
    props.inValid ? `#dc3545` : `rgb(208, 208, 208)`};

  &:hover {
    border-color: rgb(0, 0, 0);
    border-width: 1px;

    ${(props) =>
      props.focus &&
      css`
        border-color: ${(props) => props.theme.primary};
        color: ${(props) => props.theme.primary};
        border-width: 2px;
        border-style: solid;
      `};
  }

  ${(props) =>
    props.focus &&
    css`
      border-color: ${(props) => props.theme.primary};
      color: ${(props) => props.theme.primary};
      border-width: 2px;
      border-style: solid;
    `};
`;

const Legend = styled.legend`
  width: auto;
  font-size: 10px;
  margin-left: 5px;
  padding-right: 5px;
  font-weight: 500;
`;

const FeedBack = styled.span`
  color: #dc3545;
  font-family: ${(props) => props.theme.font};
  font-size: 0.7em;
  font-weight: 400;
`;

export const Group = ({ title, children, inValid, errorText, require }) => {
  return (
    <Container inValid={inValid}>
      <Content inValid={inValid}>
        <Legend>{title}</Legend>
        {children}
      </Content>
      {inValid && <FeedBack>{errorText}</FeedBack>}
    </Container>
  );
};
