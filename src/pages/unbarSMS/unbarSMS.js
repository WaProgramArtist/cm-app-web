import React , { useRef } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { SearchCriteriaBox , DivInBlock } from './UnbarSmsStyle';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Form , Button , Modal } from 'react-bootstrap';
import * as UnBanSMSactions from '../../actions/UnBanSMS/UnBanSMSactions';
import { UnbanSMSInTableMobile , UnbanSMSActionAddModal } from './components';

const props = {
    temp: null
};

const UnbarSMS = (props) => {
    
    const dispatch = useDispatch();
    const mapState = useSelector((state) => {
        return {
            searchCriteriaType : state.UnBanSMSreducers.searchCriteriaType,
            searchCriteriaInput : state.UnBanSMSreducers.searchCriteriaInput,
            editMode : state.UnBanSMSreducers.editMode,
            checkedDataList : state.UnBanSMSreducers.checkedDataList,
            searchCriteriaData : state.UnBanSMSreducers.searchCriteriaData,
        }
    });

    const [searchCriteriaType,setSearchCriteriaType] = [mapState.searchCriteriaType , (data) => {dispatch(UnBanSMSactions.setSearchCriteriaType(data))}]
    const [searchCriteriaInput,setSearchCriteriaInput] = [mapState.searchCriteriaInput , (data) => {dispatch(UnBanSMSactions.setSearchCriteriaInput(data))}]
    const [editMode,setEditMode] = [mapState.editMode , (data) => {dispatch(UnBanSMSactions.setEditMode(data))}];
    const searchCriteriaTypeForm =  [
        {label : 'CIRCUIT TOL / TVS' , value : 'CIRCUIT_TOL_TVS'},
        {label : 'MOBILE NUMBER' , value : 'MOBILE_NUMBER'}
    ];

    const ActionSearchCriteria = () => {
        console.log('ActionSearchCriteria');
    }

    const searchCriteriaData = mapState.searchCriteriaData;
    const UnbanSMSActionAddModalRef = useRef();

    const ActionEditMode = () => {setCheckedDataList([]); setEditMode(!editMode);}
    const ActionRemoveMobile = (context) => {

    }
    const ActionCriteriaAdd = (context) => {
        UnbanSMSActionAddModalRef.current.setData(context.CriteriaType,context.CriteriaNo);
    }

    const [checkedDataList , setCheckedDataList] = [mapState.checkedDataList , (data) => {dispatch(UnBanSMSactions.setCheckedDataList(data))}];
    const handleActionChange = (id  , checked) => {
        if(Array.isArray(checkedDataList)){
            if(checkedDataList.indexOf(id) === -1){
                dispatch(UnBanSMSactions.setCheckedDataListPush(id));
            }else{
                dispatch(UnBanSMSactions.setCheckedDataListSplice(id));
            }
        }
    }

    return (
       <div>
            <div className="container">
                <h4><b>ระบบ Bar-Unbar SMS (planwork & event)</b></h4>
                <div className="row">
                    <div className="col-sm-12">
                        <p><b>Search TOL/TVS</b></p>
                        <SearchCriteriaBox className="">
                            <p><b>Search Criteria</b></p>
                            <div>
                                <div className="mb-1">
                                    {   
                                        searchCriteriaTypeForm.map((o , index) => (
                                            <label key={index} className="mr-2" style={{fontSize:'12px'}}>
                                                <Form.Check
                                                    inline
                                                    type="radio"
                                                    name="searchCriteriaType"
                                                    value={o.value}
                                                    checked={searchCriteriaType === o.value}
                                                    onChange={e => setSearchCriteriaType(e.currentTarget.value)}
                                                />
                                                <b>{o.label}</b>
                                            </label>
                                        ))
                                    }
                                </div>
                            </div>
                            <Form.Group as={Row} controlId="formPlaintextEmail">
                                <Col md="10">
                                    <Form.Control type="text" 
                                        value={searchCriteriaInput} 
                                        onChange={e => setSearchCriteriaInput(e.currentTarget.value)} 
                                    />
                                </Col>
                                <Col md="2">
                                    <Button variant="primary" onClick={ActionSearchCriteria} block>ค้นหา</Button>
                                </Col>
                            </Form.Group>
                        </SearchCriteriaBox>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <DivInBlock>
                            <span style={{float:'right'}}>
                                {editMode ? <Button variant="danger" size="sm" className='mr-2' onClick={ActionRemoveMobile}>REMOVE MOBILE</Button> : null}
                                <Button variant="primary" size="sm" onClick={ActionEditMode}>EDIT MODE</Button>
                            </span>
                        </DivInBlock>
                        <div>
                            <table className="table table-bordered" style={{width: '100%' , fontSize: '12px'}}>
                                <thead>
                                    <tr>
                                        <th rowSpan={2}>NO.</th>
                                        <th colSpan={2}>TRUE ONLINE</th>
                                        <th colSpan={2}>TRUE VISIONS</th>
                                        <th rowSpan={2}>PRODUCT</th>
                                        <th rowSpan={2}>CUSTOMER_NAME</th>
                                        <th rowSpan={2}>SUB_DISTRICT</th>
                                        <th rowSpan={2}>DISTRICT</th>
                                        <th rowSpan={2}>PROVINCE</th>
                                    </tr>
                                    <tr>
                                        <th>TOL_NO</th>
                                        <th>MOBILE_NO</th>
                                        <th>TVS_NO</th>
                                        <th>MOBILE_NO</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Doe</td>
                                    <td><UnbanSMSInTableMobile editMode={editMode} checkedDataList={checkedDataList} criteriaType="CIRCUIT_TOL" data={{MobileNoList:['081254168'] , CriteriaNo : 'ssss'}} handleActionAdd={ActionCriteriaAdd} handleActionChange={handleActionChange} ></UnbanSMSInTableMobile></td>
                                    <td>Doe</td>
                                    <td><UnbanSMSInTableMobile editMode={editMode} checkedDataList={checkedDataList} criteriaType="CIRCUIT_TVS" data={{MobileNoList:['081254168'] , CriteriaNo : 'ssss'}} handleActionAdd={ActionCriteriaAdd} handleActionChange={handleActionChange} ></UnbanSMSInTableMobile></td>
                                    <td>Doe</td>
                                    <td>Doe</td>
                                    <td>Doe</td>
                                    <td>Doe</td>
                                    <td>Doe</td>
                                </tr>
                                </tbody>
                            </table>
                            {checkedDataList.join(' , ')}
                        </div>
                    </div>
                </div>
            </div>
            <UnbanSMSActionAddModal ref={UnbanSMSActionAddModalRef} />
       </div>
    );

};

export default UnbarSMS;