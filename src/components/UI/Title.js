import styled from "styled-components";

const Title = styled.div`
  background: ${(props) => props.theme.primaryGradient};
  height: 40px;
  width: ${(props) => props.width + "px"};
  display: flex;
  align-items: center;
  text-align: left;
  padding-left: 10px;
  margin-top: 10px;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
`;

export { Title };
