import styled, { css } from "styled-components";
import React from "react";

const TextStatus = styled.span`
  font-family: ${(props) => props.theme.font};
  font-size: 14px;

  ${(props) =>
    props.status === 1 &&
    css`
      color: rgb(16, 117, 160);
    `};

  ${(props) =>
    props.status === 2 &&
    css`
      color: rgb(159, 31, 149);
    `};

  ${(props) =>
    props.status === 4 &&
    css`
      color: rgb(159, 31, 149);
    `};

  ${(props) =>
    props.status === 3 &&
    css`
      color: red;
    `};

  ${(props) =>
    props.status === 6 &&
    css`
      color: green;
    `};
  ${(props) =>
    props.status === 5 &&
    css`
      color: #ffcc5c;
    `};
`;

export function JobStatus({ status = 1 }) {
  return (
    <React.Fragment>
      <TextStatus status={status}>
        {status === 1
          ? "Waiting"
          : status === 2
          ? "InProgress"
          : status === 4
          ? "InProgress"
          : status === 3
          ? "Stop"
          : status === 6
          ? "Complete"
          : status === 5
          ? "Cancel"
          : ""}
      </TextStatus>
    </React.Fragment>
  );
}
