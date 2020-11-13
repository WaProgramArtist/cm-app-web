import React, { useState } from "react";
import Select from "react-dropdown-select";
import styled, { css } from "styled-components";

const Container = styled.fieldset`
  border-width: 1px;
  border-style: solid;
  border-color: rgb(208, 208, 208);
  width: 100%;
  height: 45px;
  border-radius: 4px;
  margin-top: ${(props) => props.marginTop + `px`};
  display: flex;
  flex-direction:column;
  color: rgba(0, 0, 0, 0.54);
  font-size: 1rem;
  font-weight: 400;
  font-family: ${(props) => props.theme.font};
  border-color: ${(props) =>
    props.inValid ? `#dc3545` : `rgb(208, 208, 208)`};
  margin-bottom: ${(props) => (props.inValid ? `12px` : `0px`)};
  background-color: #fff;

  &:hover {
    border-color: rgb(0, 0, 0);
    border-width: 1px;

    ${(props) =>
      props.focus &&
      css`
        border-color: ${(props) => props.theme.primary} !important;
        color: ${(props) => props.theme.primary} !important;
        border-width: 2px;
        border-style: solid;
      `};
  }

  ${(props) =>
    props.focus &&
    css`
      border-color: ${(props) => props.theme.primary} !important;
      color: ${(props) => props.theme.primary} !important;
      border-width: 2px;
      border-style: solid;
    `};
`;

const Legend = styled.legend`
  font-family: ${(props) => props.theme.font};
  width: auto;
  font-size: 10px;
  margin-left: 5px;
  padding-right: 5px;
  font-weight: 500;
`;

const ContentInput = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const FeedBack = styled.span`
  color: #dc3545;
  margin-top: 2px;
  font-family: ${(props) => props.theme.font};
  font-size: 0.7em;
  font-weight: 400;
`;

const StyledSelect = styled(Select)`
  font-family: ${(props) => props.theme.font};
  height: 30px !important;
  margin-top: -14px;
  background: transparent;
  border: none !important;
  color: #333;
  font-size: 12px;
  font-weight: 600;
  padding-left: 5px;
  box-shadow: none;
  width: 100%;

  &:focus {
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
  }

  .react-dropdown-select-clear,
  .react-dropdown-select-dropdown-handle {
    color: rgba(0, 0, 0, 0.54);
    margin-top: 0px;
    ${(props) =>
      props.focus &&
      css`
        color: ${(props) => props.theme.primary} !important;
        margin-top: -7px;
      `};
  }
  .react-dropdown-select-option {
    font-size: 12px;
    font-weight: 400;
    padding-left: 5px;
    border: 1px solid #fff;
    width: 100%;
  }

  .react-dropdown-select-item {
    color: #333;
    padding-left: 5px;
  }

  .react-dropdown-select-input {
    color: #333;
    font-size: 12px;
    font-weight: 500;
  }
  .react-dropdown-select-dropdown {
    position: absolute;
    left: 0;
    border: none;
    width: ${(props) => props.width + "px"};
    padding: 0;
    display: flex;
    flex-direction: column;
    border-radius: 2px;
    max-height: 300px;
    overflow: auto;
    z-index: 9;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px 0px;
    color: #000 !important;
    font-size: 12px;
    font-weight: 500;
  }

  .react-dropdown-select-item {
    color: #333;
    height: 35px;
    align-items: center;
    display: flex;

    :hover {
      color: #333;
      background-color: rgb(245, 245, 245);
      border-bottom: 1px solid rgb(245, 245, 245);
    }
  }

  .react-dropdown-select-item.react-dropdown-select-item-selected,
  .react-dropdown-select-item.react-dropdown-select-item-active {
    background: ${(props) => props.theme.primary};
    border-bottom: 1px solid ${(props) => props.theme.primary};
    color: #fff;
    font-weight: bold;
  }
  .react-dropdown-select-item.react-dropdown-select-item-disabled {
    background: #ccc;
    color: #ccc;
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

export function DropdownList({
  options,
  title,
  inValid,
  errorText,
  require,
  value,
  onChange,
  marginTop,
}) {
  const [focus, onFocus] = useState(false);
  let values = [];
  if (value) {
    values.push(value);
  }

  // console.log("options",options)

  return (
    <Container
      focus={focus}
      inValid={inValid ?? false}
      marginTop={marginTop ?? 15}
    >
      <Legend>{title ?? ""}</Legend>
      <ContentInput>
        <div style={{ width: "100%" }}>
          <StyledSelect
            focus={focus}
            dropdownPosition="auto"
            values={values}
            options={options}
            onChange={(values) => {
              if (onChange) {
                onChange(values);
              }
            }}
            placeholder={"Select " + (title ?? "")}
            onDropdownOpen={() => {
              onFocus(true);
            }}
            onDropdownClose={() => {
              onFocus(false);
            }}
          />
        </div>
        {require && <Star> *</Star>}
      </ContentInput>
      {inValid && <FeedBack>{errorText}</FeedBack>}
    </Container>
  );
}
