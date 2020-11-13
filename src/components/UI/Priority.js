import styled, { css } from "styled-components";
import React from "react";

const TextStatus = styled.span`
  font-family: ${(props) => props.theme.font};
  font-size: 14px;

  ${(props) =>
    props.priority === 1 &&
    css`
      color: rgb(233, 68, 69);
    `};

  ${(props) =>
    props.priority === 2 &&
    css`
      color: rgb(255, 144, 55);
    `};

  ${(props) =>
    props.priority === 3 &&
    css`
      color: rgb(240, 209, 60);
    `};

  ${(props) =>
    props.priority === 4 &&
    css`
      color: rgb(34, 34, 34);
    `};
`;

export function Priority({ priority = 1 }) {
  return (
    <React.Fragment>
      <TextStatus priority={priority}>
        {priority === 1 ? "Hight" : priority === 2 ? "Normal" : "Low"}
      </TextStatus>
    </React.Fragment>
  );
}
