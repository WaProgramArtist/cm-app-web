import styled, { css } from "styled-components";
import React, { useState } from "react";

const Container = styled.fieldset`
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) =>
    props.inValid ? `#dc3545` : `rgb(208, 208, 208)`};
  margin-bottom: ${(props) => (props.inValid ? `12px` : `0px`)};
  width: 100%;
  border-radius: 4px;
  margin-top: 15px;
  margin-right: 5px;
  height: 45px;
  display: flex;
  flex-direction: column;
  color: rgba(0, 0, 0, 0.54);
  font-size: 0.8em;
  font-weight: 400;
  font-family: ${(props) => props.theme.font};

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
  font-size: 14px;
  margin-top: 0px;
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

const Star = styled.div`
  font-family: ${(props) => props.theme.font};
  font-size: 1.2em;
  color: #dc3545;
  margin-top: -4px;
  width: 15px;
  margin-right: -10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ContentInput = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const FeedBack = styled.span`
  color: #dc3545;
  margin-top: 7px;
  font-family: ${(props) => props.theme.font};
  font-size: 0.9em;
  font-weight: 400;
`;

export function Input({
  title,
  placeholder,
  onChange,
  type,
  value,
  inValid,
  errorText,
  require,
  onBlur,
}) {
  const [focus, onFocus] = useState(false);

  return (
    <React.Fragment>
      <Container focus={focus} inValid={inValid ?? false}>
        <Legend>{title ?? ""}</Legend>
        <ContentInput>
          <div style={{ width: "100%", marginTop: -7 }}>
            <TextInput
              value={value ?? ""}
              placeholder={placeholder ?? ""}
              onChange={onChange ? onChange : () => {}}
              type={type ?? "text"}
              onFocus={() => {
                onFocus(true);
              }}
              onBlur={(e) => {
                onFocus(false);
                if (onBlur) {
                  onBlur(e);
                }
              }}
            />
          </div>
          {require && <Star> *</Star>}
        </ContentInput>
        {inValid && <FeedBack>{errorText}</FeedBack>}
      </Container>
    </React.Fragment>
  );
}
