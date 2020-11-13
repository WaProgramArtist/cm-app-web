import styled from "styled-components";
import React from "react";

const TextStatus = styled.span`
  font-family: ${(props) => props.theme.font};
  font-size: 14px;
`;

export function Channel({ channele = "1" }) {
  return (
    <React.Fragment>
      <TextStatus status={channele}>
        {channele === "1"
          ? "SMS"
          : channele === "2"
          ? "MMS"
          : channele === "3"
          ? "Redirect"
          : ""}
      </TextStatus>
    </React.Fragment>
  );
}
