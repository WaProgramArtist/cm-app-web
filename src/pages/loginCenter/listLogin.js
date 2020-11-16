import React, { useState } from 'react';
import styled from "styled-components";

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';

const props = {
    menu: '',
    title: ''
};

const dataTest = [
    {
        id: '001',
        name: 'test001',
        score: 80
    },
    {
        id: '002',
        name: 'test002',
        score: 92
    },
    {
        id: '003',
        name: 'test003',
        score: 90
    },
    {
        id: '004',
        name: 'test004',
        score: 85
    },
    {
        id: '005',
        name: 'test005',
        score: 69
    },
    {
        id: '006',
        name: 'test006',
        score: 71
    },
    {
        id: '007',
        name: 'test007',
        score: 54
    },
    {
        id: '008',
        name: 'test008',
        score: 32
    },
    {
        id: '009',
        name: 'test009',
        score: 67
    },
    {
        id: '010',
        name: 'test010',
        score: 45
    },
    {
        id: '011',
        name: 'test011',
        score: 99
    },
    {
        id: '012',
        name: 'test012',
        score: 41
    },
    {
        id: '013',
        name: 'test013',
        score: 66
    },
    {
        id: '014',
        name: 'test014',
        score: 87
    },
    {
        id: '015',
        name: 'test015',
        score: 62
    }
];

const ListLogin = (props) => {
    const [stateListData, setStateListData] = useState(dataTest);

    const dataTableOption = {
        noDataText: 'ไม่มีข้อมูลการเข้าสู่ระบบ', 
        sortIndicator: true,
        sizePerPageList: [ 5, 10, 15, 20 ],
        sizePerPage: 10
    };

    const dataTableSelectRow = {
        mode: 'checkbox',
        clickToSelect: true,  // enable click to select
        onSelect: onRowSelect,
        onSelectAll: onSelectAll
    };
    
    function getCaret(direction) {
        if (direction === 'asc') {
          return (
            <span>&nbsp;<FontAwesomeIcon icon={faSortUp} color="#B2BABB"/></span>
          );
        }
        if (direction === 'desc') {
          return (
            <span>&nbsp;<FontAwesomeIcon icon={faSortDown} color="#B2BABB"/></span>
          );
        }
        return (
            <span>&nbsp;<FontAwesomeIcon icon={faSort} color="#B2BABB"/></span>
        );
    };

    function onRowSelect(row, isSelected, e) {
        if (isSelected) {
          console.log(row);
        }
    }
      
    function onSelectAll(isSelected, rows) {
        if (isSelected) {
          console.log(rows);
        }
    }

    return (
        <TemplateBody>
            <TemplateContaintHeader>
                { props.menu }
            </TemplateContaintHeader>
            
            <TemplateContaint>
                <TemplateContaintTile>
                    { props.title }
                </TemplateContaintTile>

                <TemplateContaintBody>
                    <BootstrapTable 
                    data={ stateListData } 
                    options={ dataTableOption }
                    selectRow={dataTableSelectRow}
                    exportCSV search striped hover condensed pagination
                    >
                        <TableHeaderColumn dataField='id' isKey dataSort caretRender={ getCaret }>ID</TableHeaderColumn>
                        <TableHeaderColumn dataField='name' dataSort caretRender={ getCaret }>NAME</TableHeaderColumn>
                        <TableHeaderColumn dataField='score'>SCORE</TableHeaderColumn>
                    </BootstrapTable>
                </TemplateContaintBody>
            </TemplateContaint>
        </TemplateBody>
    );
};


export default ListLogin;

const TemplateBody = styled.div`
    width: 100%;
`;

const TemplateContaintHeader = styled.div`
    padding: 5px 15px 5px 15px;
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    margin: 0 0 1px 0;
    border-bottom: solid 2px #B2BABB;
`;

const TemplateContaint = styled.div`
    
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