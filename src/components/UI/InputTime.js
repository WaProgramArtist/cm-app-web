import styled, { css } from "styled-components";
import React, { useState } from "react";
import { faSave, faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BoxText = styled.fieldset`
  border-width: 1px;
  border-style: solid;
  border-color: rgb(208, 208, 208);
  width: 100%;
  border-radius: 4px;
  margin-top: 15px;
  height: 45px;
  display: flex;
  color: rgba(0, 0, 0, 0.54);
  font-size: 0.8em;
  font-weight: 400;
  font-family: ${(props) => props.theme.font};
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
const TextInput = styled.input`
  font-family: ${(props) => props.theme.font};
  font-size: 1em;
  margin-top: -8px;
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

const Container = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
  position: absolute;
  margin-top: 12px;
`;
const BoxTime = styled.div`
  width: 240px;
  min-height: 242px;
  display: flex;
  flex-direction: row;
`;

const BoxHour = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  scrollbar-color: red;
  height: 242px;
  overflow: auto;
`;
const BoxMins = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  height: 242px;
  overflow: auto;
`;

const Item = styled.div`
  font-family: "Kanit", sans-serif;
  font-size: 0.8rem;
  background-color: #fff;
  color: #000;
  padding: 3px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: rgb(245, 245, 245);
    border-radius: 2px;
    cursor: pointer;
  }

  ${(props) =>
    props.active &&
    css`
      color: white;
      background-color: ${(props) => props.theme.primary};
      border-radius: 2px;
      &:hover {
        background-color: rgb(168, 58, 77);
        border-radius: 2px;
      }
    `};
`;

const List = styled.div``;
const BoxButton = styled.div`
  width: 100%;
  padding: 5px;
`;

const Button = styled.button`
  width: auto;
  padding-left: 25px;
  padding-right: 25px;
  border: none;
  border-color: rgb(208, 208, 208);
  border-radius: 4px;
  font-size: 12px;
  height: 30px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.87);
  box-sizing: border-box;
  background-color: #fff;
  border-width: 1px;
  border-style: solid;
  width: 100%;

  &:focus {
    outline: none;
  }
  color: white;
  background-color: ${(props) => props.theme.primary};
  border-color: ${(props) => props.theme.primary};
  border-radius: 4px;
  font-size: 12px;
  height: 30px;
  font-weight: 600;

  &:hover {
    background-color: rgb(168, 58, 77);
    border-color: rgb(168, 58, 77);
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

function padLeadingZeros(num, size) {
  var s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
}

export function Hour({ addHour }) {
  const [h, setHour] = useState(-1);
  let hour = [];
  for (let i = 0; i < 24; i++) {
    hour.push(
      <Item
        key={i}
        active={h === i}
        onClick={() => {
          setHour(i);
          addHour(padLeadingZeros(i, 2));
        }}
      >
        {padLeadingZeros(i, 2)}
      </Item>
    );
  }
  return <List>{hour}</List>;
}

export function Mins({ addMins }) {
  const [m, setMins] = useState(-1);
  let hour = [];
  for (let i = 0; i < 60; i++) {
    hour.push(
      <Item
        key={i}
        onClick={() => {
          addMins(padLeadingZeros(i, 2));
          setMins(i);
        }}
        active={m === i}
      >
        {padLeadingZeros(i, 2)}
      </Item>
    );
  }
  return <List>{hour}</List>;
}

export function Time({ addHour, addMins }) {
  return (
    <BoxTime>
      <BoxHour>
        <Hour addHour={addHour} />
      </BoxHour>
      <BoxMins>
        <Mins addMins={addMins} />
      </BoxMins>
    </BoxTime>
  );
}

export function InputTime({
  title,
  width,
  placeholder,
  onChange,
  type,
  value,
  inValid,
  errorText,
  require,
  savemode = false,
  onSave,
  onCancel,
}) {
  const [focus, onFocus] = useState(false);
  const [h, addHour] = useState("00");
  const [m, addMins] = useState("00");
  const [showTime, onShowTime] = useState(false);

  return (
    <BoxText width={width ?? 200} focus={focus} inValid={inValid}>
      <Legend>{title ?? ""}</Legend>
      <ContentInput>
        <div style={{ width: "100%", marginTop: -7 }}>
          <TextInput
            value={value ?? h + ":" + m}
            width={width ?? 200}
            placeholder={placeholder ?? ""}
            onChange={onChange ? onChange : () => {}}
            type={type ?? "text"}
            onFocus={() => {
              onFocus(true);
              onShowTime(true);
            }}
            onBlur={() => {
              onFocus(false);
            }}
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
      </ContentInput>
      {inValid && <FeedBack>{errorText}</FeedBack>}

      {showTime && (
        <Container>
          <Time addHour={addHour} addMins={addMins} />
          <BoxButton>
            <Button
              onClick={() => {
                onShowTime(false);
                if (onChange) {
                  onChange(h + ":" + m);
                }
              }}
            >
              Ok
            </Button>
          </BoxButton>
        </Container>
      )}
    </BoxText>
  );
}
