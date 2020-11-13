import styled, { css } from "styled-components";
import React, { useState } from "react";

const Container = styled.fieldset`
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) =>
    props.inValid ? `#dc3545` : `rgb(208, 208, 208)`};
  width: 100%;
  border-radius: 4px;
  margin-top: 15px;
  height: 45px;
  display: flex;
  flex-direction: row;
  color: rgba(0, 0, 0, 0.54);
  font-size: 0.8em;
  font-weight: 400;
  font-family: ${(props) => props.theme.font};
  box-sizing: box-sizing;
  margin-bottom: ${(props) => (props.inValid ? `10px` : `0px`)};

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
const TextInput = styled.input`
  font-family: ${(props) => props.theme.font};
  font-size: 1em;
  margin-top: -7px;
  background-color: transparent;
  border: none;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  color: rgb(34, 34, 34);
  &:focus {
    outline: none;
  }
`;

const IconLeft = styled.div`
  margin-top: -8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10px;
  margin-left: 7px;
`;

const IconRight = styled.div`
  margin-top: -8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10px;
  margin-left: 7px;
  margin-right: 7px;
`;

const FeedBack = styled.span`
  color: #dc3545;
  margin-top: 7px;
  font-family: ${(props) => props.theme.font};
  font-size: 1em;
  font-weight: 400;
`;

const ContentInput = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export function InputIcon({
  title,
  iconLeft,
  iconRight,
  placeholder,
  onChange,
  type,
  value,
  errorText,
  inValid,
}) {
  const [focus, onFocus] = useState(false);

  return (
    <Container focus={focus} inValid={inValid ?? false}>
      <Legend>{title ?? ""}</Legend>
      <ContentInput>
        {iconLeft && <IconLeft>{iconLeft}</IconLeft>}
        <div style={{ width: "100%", marginTop: -7 }}>
          <TextInput
            value={value ?? ""}
            placeholder={placeholder ?? ""}
            onChange={onChange ? onChange : () => {}}
            type={type ?? "text"}
            onFocus={() => {
              onFocus(true);
            }}
            onBlur={() => {
              onFocus(false);
            }}
          />
        </div>
        {iconRight && <IconRight>{iconRight}</IconRight>}
      </ContentInput>
      {inValid && <FeedBack>{errorText}</FeedBack>}
    </Container>
  );
}
