import styled, { css } from "styled-components";
import React from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BoxCheck = styled.div`
    width:20px;
    height:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(208, 208, 208);
    cursor: pointer;

    ${(props) =>
        props.checked &&
        css`
        border-color:${props => props.theme.primary};
        border-width: 2px;
        border-style: solid;
    `};
`;

const Title = styled.span`
    font-family:${props => props.theme.font};
    font-size:14px;
    font-size:400;
    margin-left:5px;
    color:rgb(34, 34, 34);
`

const Container = styled.div`
    display:flex;
    flex-direction:row;
`


export const CheckBox = ({ checked, width, placeholder, onClick, title }) => {
    return (
        <React.Fragment>
            <Container>
                <BoxCheck checked={checked} onClick={onClick}>
                    {checked &&
                        <FontAwesomeIcon icon={faCheck} style={{ fontSize: 14 }} color={"rgb(242,83,110)"} />
                    }
                </BoxCheck>
                <Title>
                    {title}
                </Title>
            </Container>
        </React.Fragment>
    )
}