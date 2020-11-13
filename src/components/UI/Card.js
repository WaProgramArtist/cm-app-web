import React from "react";
import styled from "styled-components";

const Content = styled.div`
  background-color: #fff;
  min-height: ${(props) => props.height + "px"};
  width: 100%;
  margin-top: 10px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  padding-bottom: 20px;
`;

const Body = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.div`
  height: 40px;
  background-color: #fff;
  padding: 8px;
  padding-left: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom-color: rgba(0, 0, 0, 0.12);
  border-bottom-width: 1px;
  border-bottom-style: solid;
  justify-content: space-between;
`;

const HeaderText = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.6;
  background: ${(props) => props.theme.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  font-family: ${(props) => props.theme.font};
  margin-left: 10px;
`;

const BoxHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Card = ({ children, width, title, icon, height, topRight }) => {
  return (
    <Content width={width ?? 600} height={height ?? 200}>
      <Header>
        <BoxHeader>
          {icon}
          <HeaderText>{title ?? ""}</HeaderText>
        </BoxHeader>
        {topRight}
      </Header>

      <Body>{children}</Body>
    </Content>
  );
};
