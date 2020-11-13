import React, { useState } from "react";
import DatePicker from "react-datepicker";
import styled, { css } from "styled-components";
import moment from "moment";
import { faCalendarAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MainContainer = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: #fff;
  width: 500px;
  position: absolute;
  height: 370px;
  right: 0px;
`;
const Between = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background-color: #fff;
  width: 500px;
  height: 320px;
  right: 0px;
`;

const Container = styled.div`
  background-color: #fff;
  margin-top: 10px;
`;

const BoxButton = styled.div`
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
`;

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
  font-size: 1rem;
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

const Header = styled.div`
  background-color: transparent;
  border: none;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  height: 40px;
  background-image: linear-gradient(90deg, #6f69c6, #c15579);
  padding-top: 5px;
`;

const ButtonHeader = styled.button`
  padding-left: 25px;
  padding-right: 25px;
  border: 1px solid rgb(208, 208, 208);
  border-radius: 4px;
  font-size: 12px;
  height: 30px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.87);
  box-sizing: border-box;
  background-color: #fff;
  width: 50%;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: rgb(245, 245, 245);
  }

  ${(props) =>
    props.active &&
    css`
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
    `};
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
  overflow: scroll;
`;
const BoxMins = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  height: 242px;
  overflow: scroll;
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
          addMins(i);
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

export function InputDateBetween({ title, onChange, valuedate }) {
  const [startDate, setStartDate] = useState(null);
  const [focus, onFocus] = useState(false);
  const [showDatePicker, onShowDatePicker] = useState(false);
  const [showDate, onShowDate] = useState(true);
  const [h, addHour] = useState("00");
  const [m, addMins] = useState("00");

  const [end_startDate, end_setStartDate] = useState(null);
  const [end_showDate, end_onShowDate] = useState(true);
  const [end_h, end_addHour] = useState("00");
  const [end_m, end_addMins] = useState("00");

  return (
    <React.Fragment>
      <BoxText focus={focus}>
        <Legend>{title}</Legend>
        <TextInput
          value={valuedate ? valuedate : ""}
          onFocus={() => {
            onFocus(true);
            onShowDatePicker(true);
          }}
          onBlur={() => {
            onFocus(false);
          }}
          onChange={() => {}}
        />
        {showDatePicker && (
          <MainContainer>
            <Between>
              <Container>
                <Header>
                  <ButtonHeader
                    active={showDate}
                    style={{
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                    }}
                    onClick={() => onShowDate(true)}
                  >
                    <FontAwesomeIcon
                      icon={faCalendarAlt}
                      style={{
                        color: showDate ? "#fff" : "rgb(242,83,110)",
                        fontSize: 16,
                        marginRight: 5,
                      }}
                    />
                    Date
                  </ButtonHeader>
                  <ButtonHeader
                    active={!showDate}
                    style={{
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                    }}
                    onClick={() => onShowDate(false)}
                  >
                    <FontAwesomeIcon
                      icon={faClock}
                      style={{
                        color: !showDate ? "#fff" : "rgb(242,83,110)",
                        fontSize: 16,
                        marginRight: 5,
                      }}
                    />
                    Time
                  </ButtonHeader>
                </Header>
                {showDate ? (
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => {
                      onShowDate(false);
                      setStartDate(date);
                    }}
                    inline
                  />
                ) : (
                  <Time addHour={addHour} addMins={addMins} />
                )}

                <BoxButton></BoxButton>
              </Container>

              <Container>
                <Header>
                  <ButtonHeader
                    active={end_showDate}
                    style={{
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                    }}
                    onClick={() => end_onShowDate(true)}
                  >
                    <FontAwesomeIcon
                      icon={faCalendarAlt}
                      style={{
                        color: end_showDate ? "#fff" : "rgb(242,83,110)",
                        fontSize: 16,
                        marginRight: 5,
                      }}
                    />
                    Date
                  </ButtonHeader>
                  <ButtonHeader
                    active={!end_showDate}
                    style={{
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                    }}
                    onClick={() => end_onShowDate(false)}
                  >
                    <FontAwesomeIcon
                      icon={faClock}
                      style={{
                        color: !end_showDate ? "#fff" : "rgb(242,83,110)",
                        fontSize: 16,
                        marginRight: 5,
                      }}
                    />
                    Time
                  </ButtonHeader>
                </Header>
                {end_showDate ? (
                  <DatePicker
                    selected={end_startDate}
                    onChange={(date) => {
                      end_onShowDate(false);
                      end_setStartDate(date);
                    }}
                    inline
                  />
                ) : (
                  <Time addHour={end_addHour} addMins={end_addMins} />
                )}
              </Container>
            </Between>

            <BoxButton>
              <Button
                onClick={() => {
                  onShowDate(true);
                  onShowDatePicker(false);
                  end_onShowDate(true);

                  if (onChange) {
                    let from = moment(
                      moment(startDate).format("YYYY-MM-DD") + h + ":" + m,
                      "YYYY-MM-DD HH:mm"
                    ).format("YYYY-MM-DD HH:mm:ss"); // 2020-10-22 14:15:24

                    let to = moment(
                      moment(end_startDate).format("YYYY-MM-DD") +
                        end_h +
                        ":" +
                        end_m,
                      "YYYY-MM-DD HH:mm"
                    ).format("YYYY-MM-DD HH:mm:ss"); // 2020-10-22 14:15:24

                    let valued =
                      startDate && end_startDate
                        ? moment(
                            moment(startDate).format("YYYY-MM-DD") +
                              h +
                              ":" +
                              m,
                            "YYYY-MM-DD HH:mm"
                          ).format("YYYY-MM-DD HH:mm") +
                          " to " +
                          moment(
                            moment(end_startDate).format("YYYY-MM-DD") +
                              end_h +
                              ":" +
                              end_m,
                            "YYYY-MM-DD HH:mm"
                          ).format("YYYY-MM-DD HH:mm")
                        : "";

                    onChange(from, to, valued);
                  }
                }}
              >
                Ok
              </Button>
            </BoxButton>
          </MainContainer>
        )}
      </BoxText>
    </React.Fragment>
  );
}
