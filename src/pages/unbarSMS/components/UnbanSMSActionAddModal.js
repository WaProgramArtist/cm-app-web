import React , { useState , forwardRef, useImperativeHandle } from 'react';
import { Button , Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

const UnbanSMSActionAddModal = forwardRef((props , ref) => {
    
    const [show, setShow] = useState(false);
    const [mobileNo,setMobileNo] = useState('');
    const [CriteriaType,setCriteriaType] = useState(null);
    const [CriteriaNo,setCriteriaNo] = useState(null);

    useImperativeHandle(ref, () => ({
        setData(P_CriteriaType , P_CriteriaNo) { if(P_CriteriaType && P_CriteriaNo){ActionSetData(P_CriteriaType , P_CriteriaNo); setShow(true);} }
    }));

    const ActionSetData = (P_CriteriaType , P_CriteriaNo) => {
        setCriteriaType(P_CriteriaType);
        setCriteriaNo(P_CriteriaNo);
    }
    
    const ActionSave = () => {

    }

    const ActionClose = () => {
        setShow(false);
    }

    return (
        <Modal show={show} onHide={ActionClose}>
            <Modal.Header closeButton>
                <Modal.Title>({ CriteriaType && CriteriaNo ? CriteriaType + ':' + CriteriaNo : '-'}) Add Mobile No.</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <input type="text" className="form-control" value={mobileNo} onChange={e => setMobileNo(e.currentTarget.value)} />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={ActionClose}>Cancel</Button>
                <Button variant="primary" onClick={ActionSave} >Save</Button>
            </Modal.Footer>
        </Modal>
    )
});

export default UnbanSMSActionAddModal;