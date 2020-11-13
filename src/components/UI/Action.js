import styled from "styled-components";
import React from "react";
import { faStopCircle, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div``;

export function Action({ status, onStop, onStart }) {
  switch (status) {
    case 1:
      return (
        <Container>
          <FontAwesomeIcon
            onClick={onStop ? onStop : () => {}}
            icon={faStopCircle}
            style={{
              color: "rgb(242,83,110)",
              fontSize: 18,
              marginRight: 5,
              cursor: "pointer",
            }}
          />
        </Container>
      );
    case 2:
      return (
        <Container>
          <FontAwesomeIcon
            onClick={onStop ? onStop : () => {}}
            icon={faStopCircle}
            style={{
              color: "rgb(242,83,110)",
              fontSize: 18,
              marginRight: 5,
              cursor: "pointer",
            }}
          />
        </Container>
      );
    case 3:
      return (
        <Container>
          <FontAwesomeIcon
            onClick={onStart ? onStart : () => {}}
            icon={faPlayCircle}
            style={{
              color: "rgb(159, 31, 149)",
              fontSize: 18,
              cursor: "pointer",
            }}
          />
        </Container>
      );
    case 4:
      return <React.Fragment></React.Fragment>;

    default:
      return <React.Fragment></React.Fragment>;
  }
}
