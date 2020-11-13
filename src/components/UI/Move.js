import styled from "styled-components";
import React from "react";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  display: flex;
  width: 40px;
  flex-direction: row;
  justify-content: space-between;
`;

export function Move({
  index,
  status,
  inprogress,
  total,
  onMoveUp,
  onMoveDown,
}) {
  if (
    status === 6 ||
    status === 5 ||
    status === 4 ||
    status === 2 ||
    inprogress === false
  ) {
    return <React.Fragment></React.Fragment>;
  }

  if (total === 1) {
    return <React.Fragment></React.Fragment>;
  }

  if (index === 0) {
    return (
      <Container>
        <b />
        <FontAwesomeIcon
          onClick={onMoveDown ? onMoveDown : () => {}}
          icon={faArrowDown}
          style={{
            color: "rgb(218, 56, 73)",
            fontSize: 18,
            marginRight: 2,
            cursor: "pointer",
          }}
        />
      </Container>
    );
  }

  if (index === total - 1) {
    return (
      <Container>
        <FontAwesomeIcon
          onClick={onMoveUp ? onMoveUp : () => {}}
          icon={faArrowUp}
          style={{
            color: "rgb(48, 166, 74)",
            fontSize: 18,
            marginLeft: 2,
            cursor: "pointer",
          }}
        />
        <b />
      </Container>
    );
  }

  return (
    <Container>
      <FontAwesomeIcon
        onClick={onMoveUp ? onMoveUp : () => {}}
        icon={faArrowUp}
        style={{
          color: "rgb(48, 166, 74)",
          fontSize: 18,
          marginLeft: 2,
          cursor: "pointer",
        }}
      />
      <FontAwesomeIcon
        onClick={onMoveDown ? onMoveDown : () => {}}
        icon={faArrowDown}
        style={{
          color: "rgb(218, 56, 73)",
          fontSize: 18,
          marginRight: 2,
          cursor: "pointer",
        }}
      />
    </Container>
  );
}
