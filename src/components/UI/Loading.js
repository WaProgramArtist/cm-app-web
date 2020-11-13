import styled from "styled-components";
import React from "react";
import { Spinner } from "reactstrap";
const Container = styled.div`
  width: ${window.innerWidth + "px"};
  height: ${window.innerHeight + "px"};
  background-color: rgba(0, 0, 0, 0.001);
  top: 0;
  left: 0;
  position: fixed;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export function Loading({ loading }) {
  return (
    <Container>
      <Spinner color="danger" />
    </Container>
  );
}
