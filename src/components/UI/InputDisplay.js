import styled, { css } from "styled-components";
import React, { useState } from "react";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BoxText = styled.div`
  border: none;
  width: 100%;
  font-family: ${(props) => props.theme.font};
  margin-top: 20px;
  height: 40px;
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

const TextInput = styled.input`
  margin-top: -2px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  width: 100%;
  padding-left: 1px;
  padding-right: 1px;
  color: rgb(34, 34, 34);
  background: transparent;
  &:focus {
    outline: none;
  }
`;

const TextEliment = styled.div`
  font-size: 14px;
  font-weight: 500;
  border: none;
  width: 100%;
  padding-left: 1px;
  padding-right: 1px;
  color: rgb(34, 34, 34);
  &:focus {
    outline: none;
  }
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

const ContentEdit = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 20px;
  background: transparent;
`;

export function InputDisplay({ title, text, editmode = false, onEdit }) {
  const [focus, onFocus] = useState(false);

  return (
    <BoxText focus={focus}>
      <Text focus={focus}>{title}</Text>
      <ContentEdit>
        <TextInput
          value={text ?? ""}
          onChange={() => {}}
          onFocus={() => {
            onFocus(true);
          }}
          onBlur={() => {
            onFocus(false);
          }}
        />

        {editmode && (
          <FontAwesomeIcon
            onClick={onEdit ? onEdit : () => {}}
            icon={faEdit}
            style={{
              color: "rgb(242,83,110)",
              cursor: "pointer",
              fontSize: 14,
            }}
          />
        )}
      </ContentEdit>
    </BoxText>
  );
}

export function InputDisplayEliment({ title, eliment }) {
  return (
    <BoxText focus={false}>
      <Text focus={false}>{title}</Text>
      <TextEliment>{eliment}</TextEliment>
    </BoxText>
  );
}
