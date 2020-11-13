import React from "react";
import styled from "styled-components";
import { Button } from "../components";

const Container = styled.div`
  width: ${window.innerWidth + "px"};
  height: ${window.innerHeight + "px"};
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  position: fixed;
  z-index: 9998;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Content = styled.div`
  width: 700px;
  height: 450px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
`;

const Header = styled.div`
  height: 65px;
  box-shadow: 0 4px 4px -4px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Body = styled.div`
  margin-top: 20px;
  height: 400px;
  padding: 20px;
  padding-top: 0px;
  font-size: 14px;
  font-family: ${(props) => props.theme.font};
`;

const Footer = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 10px;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: rgb(214, 214, 214);
`;

const TextHeader = styled.span`
  font-family: ${(props) => props.theme.font};
  font-size: 20px;
  background: ${(props) => props.theme.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-left: 0px;
  font-weight: 700;
`;

const TextRed = styled.span`
  color: red;
`;

export function ModalCondition({ onAccept }) {
  return (
    <Container>
      <Content>
        <Header>
          <TextHeader>เงื่อนไขการใช้งาน (Usage Terms & Conditions)</TextHeader>
        </Header>
        <Body>
          <p>
            ข้าพเจ้ารับทราบและยอมรับว่า การใช้งานระบบ SMS Center
            ในการติดต่อกับลูกค้าของข้าพเจ้าในครั้งนี้
            เป็นการใช้งานเพื่อกิจการของบริษัท
            และเป็นไปตามนโยบายและระเบียบในการปฏิบัติงานของบริษัท
            โดยได้ไตร่ตรองรอบคอบแล้วว่า
            การสื่อสารดังกล่าวจะไม่ก่อให้เกิดความเสียหายต่อบริษัทฯ
            หรือกระทบต่อภาพลักษณ์ของบริษัทแต่อย่างใด
          </p>
          <p>
            I hereby certify that, in using this SMS Center to communicate with
            customers on behalf of the Company, I have carefully executed this
            action in accordance with the Company’s policy and its Code of
            Conduct, and that I have already carefully assessed that, based upon
            my best judgement of the circumstance, this action will not result
            in any negative impacts to the Company and/or its image.
          </p>

          <p>
            **หมายเหตุ:
            <TextRed>
              หากตรวจพบว่าการใช้งานระบบ SMS Center ในครั้งนี้
              เป็นการใช้งานเพื่อแสวงหาประโยชน์ส่วนตัว
              หรือส่งผลกระทบในเชิงลบต่อบริษัทไม่ว่าทางตรงหรือทางอ้อม
              บริษัทจะดำเนินการลงโทษทางวินัยตามมาตรการของบริษัท
            </TextRed>
          </p>

          <p>
            **Remarks:
            <TextRed>
              Company will take disciplinary action(s) if the audit finding
              indicates that your usage of SMS Web Center violates this Usage
              Terms & Conditions.
            </TextRed>
          </p>
        </Body>
        <Footer>
          <Button onClick={onAccept}>ยอมรับ/Accept</Button>
        </Footer>
      </Content>
    </Container>
  );
}
