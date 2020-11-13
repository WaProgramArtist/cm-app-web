import React, { useState } from "react";
import Select from "react-dropdown-select";
import styled, { css } from "styled-components";
import { Table } from "reactstrap";

const Container = styled.fieldset`
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) =>
    props.inValid ? `#dc3545` : `rgb(208, 208, 208)`};
  width: 100%;
  height: 45px;
  border-radius: 4px;
  margin-top: 15px;
  display: flex;
  color: rgba(0, 0, 0, 0.54);
  font-size: 1rem;
  font-weight: 400;

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
  width: auto;
  font-size: 10px;
  margin-left: 5px;
  padding-right: 5px;
  font-weight: 500;
`;

const StyledSelect = styled(Select)`
  height: 30px !important;
  margin-top: -14px;
  background: transparent;
  border: none !important;
  color: #333;
  font-size: 12px;
  font-weight: 600;
  padding-left: 5px;
  box-shadow: none;

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
    width: 1200px;
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

const Items = styled.div`
  overflow: auto;
  min-height: 10px;
  max-height: 200px;
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
  margin-top: 2px;
  font-family: ${(props) => props.theme.font};
  font-size: 0.7em;
  font-weight: 400;
`;

export function DropdownListTemplate({
  options,
  title,
  inValid,
  errorText,
  require,
  value,
  onChange,
}) {
  let values = [];
  if (value) {
    values.push(value);
  }
  const [focus, onFocus] = useState(false);
  const customDropdownRenderer = ({ props, state, methods }) => {
    const regexp = new RegExp(state.search, "i");

    return (
      <Items>
        <Table size={"sm"} hover style={{ fontSize: 12, fontFamily: "Kanit" }}>
          <thead style={{ backgroundColor: "rgb(242,83,110)", color: "#fff" }}>
            <tr>
              <th width="120">TemplateId</th>
              <th width="100">Sender</th>
              <th width="80">Language</th>
              <th width="80">Version</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {props.options
              .filter((item) =>
                regexp.test(item[props.searchBy] || item[props.labelField])
              )
              .map((option) => {
                if (!props.keepSelectedInList && methods.isSelected(option)) {
                  return null;
                }

                return (
                  <tr
                    key={option[props.valueField]}
                    onClick={
                      option.disabled ? null : () => methods.addItem(option)
                    }
                  >
                    <td>{option.label3}</td>
                    <td>{option.label1}</td>
                    <td>{option.label4}</td>
                    <td>{option.label5}</td>
                    <td>{option.label2}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Items>
    );
  };

  return (
    <Container focus={focus} inValid={inValid ?? false}>
      <Legend>{title ?? ""}</Legend>{" "}
      <ContentInput>
        <div style={{ width: "100%" }}>
          <StyledSelect
            focus={focus}
            values={values}
            options={options}
            onChange={onChange}
            placeholder={"Select " + (title ?? "")}
            dropdownRenderer={customDropdownRenderer}
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
