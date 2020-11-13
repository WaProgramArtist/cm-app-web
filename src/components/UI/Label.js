import styled, { css } from "styled-components";

const Label = styled.span`
color:rgb(34,34,34);
font-size:12px;
font-weight:500;
${(props) =>
        props.primary &&
        css`
      color:${props => props.theme.primary};
    `};
`;

export { Label }

