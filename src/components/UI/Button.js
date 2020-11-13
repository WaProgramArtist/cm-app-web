import styled, { css } from "styled-components";

const Button = styled.button`
  width: auto;
  padding-left: 25px;
  padding-right: 25px;
  border: none;
  border-color: rgb(208, 208, 208);
  border-radius: 4px;
  font-size: 14px;
  height: 35px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.87);
  box-sizing: border-box;
  background-color: #fff;
  border-width: 1px;
  border-style: solid;
  font-family: ${(props) => props.theme.font};

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: rgb(245, 245, 245);
  }

  ${(props) =>
    props.primary &&
    css`
      color: white;
      background-color: ${(props) => props.theme.primary};
      border-color: ${(props) => props.theme.primary};
      border-radius: 4px;
      font-size: 14px;
      height: 35px;
      font-weight: 600;
      box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
        0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

      &:hover {
        background-color: rgb(168, 58, 77);
        border-color: rgb(168, 58, 77);
      }
    `};

  ${(props) =>
    props.full &&
    css`
      width: 100%;
      box-shadow: none;
    `};

  ${(props) =>
    props.disabled &&
    css`
      color: rgb(129, 129, 129);
      background-color: ${(props) => props.theme.disabled};
      border-radius: 4px;
      border-color: ${(props) => props.theme.disabled};
      border-width: 1px;
      border-style: solid;
      font-size: 12px;
      height: 30px;
      font-weight: 600;
    `};

  ${(props) =>
    props.outline &&
    css`
      color: ${(props) => props.theme.primary};
      background-color: #fff;
      border-radius: 4px;
      border-color: ${(props) => props.theme.primary};
      border-width: 1px;
      border-style: solid;
      font-size: 12px;
      height: 30px;
      font-weight: 600;
    `};

  ${(props) =>
    props.link &&
    css`
      color: rgb(65, 139, 232);
      background-color: transparent;
      border: none;
      font-size: 12px;
      height: 30px;
      font-weight: 600;
      text-align: left;
      padding-left: 0px;

      &:hover {
        background-color: transparent;
        border: none;
      }
      
    `};
`;

export { Button };
