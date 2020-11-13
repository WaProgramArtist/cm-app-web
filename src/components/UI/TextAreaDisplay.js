import styled, { css } from "styled-components";
import React, { useState } from "react";

const Container = styled.fieldset`
  border: none;
  width: 100%;
  font-family: ${(props) => props.theme.font};
  margin-top: 10px;
  height: auto;
  display: flex;
  flex-direction: column;
  color: rgba(0, 0, 0, 0.54);
  font-size: 0.9em;
  font-weight: 400;

  &:hover {
    border-color: rgb(0, 0, 0);
    border-width: 1px;

    ${(props) =>
      props.focus &&
      css`
        border: none;
        border-bottom-color: ${(props) => props.theme.primary};
        color: ${(props) => props.theme.primary};
        border-bottom-width: 2px;
        border-bottom-style: solid;
      `};
  }

  ${(props) =>
    props.focus &&
    css`
      border: none;
      border-bottom-color: ${(props) => props.theme.primary};
      color: ${(props) => props.theme.primary};
      border-bottom-width: 2px;
      border-bottom-style: solid;
    `};
`;

const TextInput = styled.textarea`
  font-family: ${(props) => props.theme.font};
  font-size: 13px;
  font-weight: 500;
  margin-top: 10px;
  background-color: transparent;
  border: none;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  color: rgb(34, 34, 34);
  overflow: none;
  min-height: ${(props) => props.minHight + "px"};

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
  font-size: 0.8em;
  font-weight: 400;
`;
const Text = styled.span`
  color: rgba(0, 0, 0, 0.54);
  font-size: 14px;
  margin-left: 1px;
  font-weight: 400;
  ${(props) =>
    props.focus &&
    css`
      color: ${(props) => props.theme.primary};
    `};
`;
export function TextAreaDisplay({
  title,
  onChange,
  type,
  text,
  inValid,
  errorText,
  require,
  onBlur,
  placeholder,
  minHight,
}) {
  const [focus, onFocus] = useState(false);
  return (
    <React.Fragment>
      <Container inValid={inValid} focus={focus} minHight={minHight ?? 110}>
      <Text focus={focus}>{title}</Text>
        <ContentInput>
          <div style={{ width: "100%", marginTop: -7 }}>
            <TextInput
              minHight={minHight - 24 ?? 110}
              value={text ?? ""}
              placeholder={placeholder ?? ""}
              onChange={onChange ? onChange : () => {}}
              onFocus={() => {
                onFocus(true);
              }}
              onBlur={() => {
                onFocus(false);
              }}
            />
          </div>
          {require && <Star> *</Star>}
        </ContentInput>
      </Container>
      {inValid && <FeedBack>{errorText}</FeedBack>}
    </React.Fragment>
  );
}
