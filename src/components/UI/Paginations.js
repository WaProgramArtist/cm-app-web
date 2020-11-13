import styled from "styled-components";
import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  font-family: ${(props) => props.theme.font};
  font-size: 14px;
  color: rgb(242, 83, 110);
`;

const TextActive = styled.span`
  font-family: ${(props) => props.theme.font};
  font-size: 14px;
  color: rgb(255, 255, 255);
`;

export function Paginations({ Total, PageSize, PageActive, onPage }) {
  if (Total === 0 && PageActive === 1) {
    return <div />;
  }

  let page = [];
  let totalPage = Total / PageSize;
  if (Total % PageSize > 0) {
    totalPage += 1;
  }
  for (let i = 1; i <= totalPage; i++) {
    if (i > 0) {
      page.push(i);
    }
  }

  const onPageNext = () => {
    if (PageActive < page[page.length - 1]) {
      let PageNo = PageActive + 1;
      onPage(PageNo);
    }
  };

  const onPageBack = () => {
    if (PageActive > 1) {
      let PageNo = PageActive - 1;
      onPage(PageNo);
    }
  };

  return (
    <Container>
      <Pagination aria-label="Page navigation example">
        <PaginationItem onClick={() => onPage(1)}>
          <PaginationLink first style={{ color: "rgb(242, 83, 110)" }} />
        </PaginationItem>
        <PaginationItem onClick={() => onPageBack()}>
          <PaginationLink previous style={{ color: "rgb(242, 83, 110)" }} />
        </PaginationItem>

        {page.map((p, index) => {
          if (PageActive === p) {
            return (
              <PaginationItem
                key={index}
                onClick={() => onPage(p)}
                style={{ backgroundColor: "rgb(242, 83, 110)" }}
              >
                <PaginationLink
                  style={{ backgroundColor: "rgb(242, 83, 110)" }}
                >
                  <TextActive>{p}</TextActive>
                </PaginationLink>
              </PaginationItem>
            );
          }

          return (
            <PaginationItem key={index} onClick={() => onPage(p)}>
              <PaginationLink>
                <Text>{p}</Text>
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem onClick={() => onPageNext()}>
          <PaginationLink next style={{ color: "rgb(242, 83, 110)" }} />
        </PaginationItem>
        <PaginationItem onClick={() => onPage(page[page.length - 1])}>
          <PaginationLink last style={{ color: "rgb(242, 83, 110)" }} />
        </PaginationItem>
      </Pagination>
    </Container>
  );
}
