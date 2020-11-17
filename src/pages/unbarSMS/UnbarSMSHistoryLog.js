import React from 'react';
import {SearchCriteriaBox , DivInBlock} from './UnbarSmsStyle';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Form , Button } from 'react-bootstrap';

const props = {
    temp: null
};

const UnbarSMSHistoryLog = (props) => {

    return (
       <div>
            <div className="container">
                <h4><b>ระบบ Bar-Unbar SMS (planwork & event)</b></h4>
                <div className="row">
                    <div className="col-sm-12">
                        <p><b>History Log</b></p>
                        <SearchCriteriaBox className="">
                            <p><b>Search Criteria</b></p>
                            <div className="row">
                                <div className="col-4">
                                    <Form.Group>
                                        <Form.Label>CIRCUIT TOL / TVS</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </div>
                                <div className="col-4">
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>CREATE/UPDATE DATE (start-end)</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </div>
                                <div className="col-4">
                                    <Form.Group>
                                        <Form.Label>CREATE/UPDATE BY</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </div>
                                <div className="col-12">
                                    <Button variant="primary">ค้นหา</Button>
                                </div>
                            </div>
                        </SearchCriteriaBox>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <DivInBlock>
                            <span style={{float:'right'}}>
                                <Button variant="primary" size="sm" block>EDIT MODE</Button>
                            </span>
                        </DivInBlock>
                        <div>
                            <table className="table table-bordered" style={{width: '100%' , fontSize: '12px'}}>
                                <thead>
                                    <tr>
                                        <th>NO.</th>
                                        <th>CIRCUIT_NO</th>
                                        <th>PRODUCT_TYPE</th>
                                        <th>ACTION</th>
                                        <th>MOBILE_NO</th>
                                        <th>CREATE_BY</th>
                                        <th>CREATE_DATE</th>
                                        <th>UPDATE_BY</th>
                                        <th>UPDATE_DATE</th>
                                        <th>REMARK</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>John</td>
                                    <td>Doe</td>
                                    <td>john@example.com</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    );
};

export default UnbarSMSHistoryLog;