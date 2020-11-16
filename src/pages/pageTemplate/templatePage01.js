import React from 'react';
import styled from "styled-components";

const props = {
    title: ''
};

const TemplatePage01 = (props) => {

    return (
        <TemplateBody>
            <TemplateContaintHeader>
                <h3>{props.title}</h3>
            </TemplateContaintHeader>
            
            <TemplateBodyColumn>
                <TemplateContaintLeft>
                    <TemplateContaintTile>
                        LEFT
                    </TemplateContaintTile>

                    <TemplateContaintBody>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    </TemplateContaintBody>
                </TemplateContaintLeft>

                <TemplateContaintRight>
                    <TemplateContaintTile>
                        RIGHT
                    </TemplateContaintTile>

                    <TemplateContaintBody>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    </TemplateContaintBody>
                </TemplateContaintRight>
            </TemplateBodyColumn>
        </TemplateBody>
    );
};


export default TemplatePage01;

const TemplateBody = styled.div`
    width: 100%;
`;

const TemplateBodyColumn = styled.div`
    display: grid;
    grid-template-columns: 20% 80%;
    grid-column-gap: 1px;
    width: 100%;
`;

const TemplateContaintHeader = styled.div`
    padding: 5px 15px 5px 15px;
    text-align: center;
    background-color: red;
    margin: 0 0 1px 0;
`;

const TemplateContaintLeft = styled.div`
    background-color: blue;
`;

const TemplateContaintRight = styled.div`
    background-color: green;
`;

const TemplateContaintTile = styled.div`
    padding: 5px 15px 5px 15px;
    font-size: 22px;
    font-weight: bold;
    border-bottom: solid 1px #B2BABB;
`;

const TemplateContaintBody = styled.div`
    padding: 5px 15px 5px 15px;
    font-size: 18px;
    color: #B2BABB;
`;

const TemplateContaintFooter = styled.div`
    padding: 5px 15px 5px 15px;
    font-size: 18px;
    font-weight: bold;
    border-top: solid 1px #B2BABB;
`;