import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: #f2f3f8;
  display: flex;
  flex: 1;
  height: ${window.innerHeight.toString() + "px"};
  flex-direction: column;
  justify-content: center;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0px;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid rgba(0, 0, 0, 0.125);
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
  margin-bottom: 1rem;
  padding: 20px;
  width: 350px;
  height: 300px;
  align-items: center;
`;

export const TextHeader = styled.div`
  font-family: ${(props) => props.theme.font};
  margin-top: 10px;
  color: gray;
  font-size: 14px;
`;

export const Group = styled.div`
  width: 100%;
  margin-top: 20px;
`;

export const Logo = styled.span`
  font-size: 25px;
  background: ${(props) => props.theme.primaryGradient};
  font-family: ${(props) => props.theme.font};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-left: 15px;
  font-weight: 700;
  margin-bottom: 0px;
`;

export const HeaderTop = styled.div`
  background-color: white;
  border-color: #dee2e6;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  box-shadow: 0 4px 4px -4px rgba(0, 0, 0, 0.2);
  height: 50px;
  width: ${window.innerWidth + "px"};
  position: fixed;
  z-index: 9997;
  top: 0px;
  left: 0px;
`;

export const TextLogo = styled.span`
  font-size: 24px;
  background: ${(props) => props.theme.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-left: 0px;
  font-weight: 700;
  font-family: ${(props) => props.theme.font};
`;