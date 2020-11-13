import React, { useState } from "react";
import DatePicker from "react-datepicker";
import styled, { css } from "styled-components";
import moment from "moment";
import { faSave, faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
  position: absolute;
  margin-top: 20px;
  z-index: 9990;
`;

const BoxText = styled.fieldset`
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) =>
    props.inValid ? `#dc3545` : `rgb(208, 208, 208)`};
  width: 100%;
  border-radius: 4px;
  margin-top: 15px;
  height: 45px;
  display: flex;
  color: rgba(0, 0, 0, 0.54);
  font-size: 0.9em;
  font-weight: 400;

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
  font-family: "Kanit", sans-serif;
  font-size: 14px;
  margin-top: -9px;
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
  margin-top: 1px;
  font-family: ${(props) => props.theme.font};
  font-size: 0.8em;
  font-weight: 400;
`;

export function InputDatePicker({
  title,
  onChange,
  inValid,
  errorText,
  require,
  value,
  minDate,
  savemode = false,
  onSave,
  onCancel,
}) {
  // console.log("value", value);
  const [startDate, setStartDate] = useState(
    value ?? moment(new Date()).format("YYYY-MM-DD")
  );
  const [focus, onFocus] = useState(false);
  const [showDatePicker, onShowDatePicker] = useState(false);

  // console.log("startDate", startDate);

  return (
    <React.Fragment>
      <BoxText focus={focus} inValid={inValid}>
        <Legend>{title}</Legend>
        <ContentInput>
          <div style={{ width: "100%", marginTop: -7 }}>
            <TextInput
              value={
                value ? moment(value, "YYYY-MM-DD").format("YYYY-MM-DD") : ""
              }
              onFocus={() => {
                onFocus(true);
                onShowDatePicker(true);
              }}
              onBlur={() => {
                onFocus(false);
              }}
              onChange={() => {}}
            />
          </div>
          {require && <Star> *</Star>}
          {savemode && (
            <React.Fragment>
              <FontAwesomeIcon
                onClick={onSave ? onSave : () => {}}
                icon={faSave}
                style={{
                  color: "green",
                  cursor: "pointer",
                  fontSize: 20,
                  marginTop: -8,
                  marginRight: 10,
                }}
              />

              <FontAwesomeIcon
                onClick={onCancel ? onCancel : () => {}}
                icon={faBan}
                style={{
                  color: "red",
                  cursor: "pointer",
                  fontSize: 20,
                  marginTop: -8,
                  marginRight: 10,
                }}
              />
            </React.Fragment>
          )}
          {showDatePicker && (
            <Container>
              <DatePicker
                // selected={moment(startDate,"YYYY-MM-DD").format("MM-DD-YYYY")}
                // selected={Date.parse(
                //   moment(startDate ?? new Date(), "YYYY-MM-DD").format(
                //     "MM-DD-YYYY"
                //   )
                // )}
                minDate={minDate}
                onChange={(date) => {
                  console.log("date",date)
                  setStartDate(date);
                  if (onChange) {
                    onChange(moment(date).format("YYYY-MM-DD"));
                  }
                  onShowDatePicker(false);
                }}
                inline
              />
            </Container>
          )}
        </ContentInput>
        {inValid && <FeedBack>{errorText}</FeedBack>}
      </BoxText>
    </React.Fragment>
  );
}
