import React from 'react';
import PropTypes from 'prop-types';

const UnbanSMSInTableMobile = (props) => {
    const data = props.data ? props.data : null;
    const checkedDataList = props.checkedDataList ? props.checkedDataList : null;
    return (
        <div>
            {data && data.CriteriaNo ?
                (<div>
                    <div style={{width:'75%' , float:'left' , display : 'inline-block'}}>
                        <div>
                            {
                                data.MobileNoList.map((value , index) => (
                                    <div key={index}>
                                        {props.editMode ? (
                                            <label>
                                                <input 
                                                    type="checkbox" 
                                                    className="mr-1" 
                                                    checked={checkedDataList && Array.isArray(checkedDataList) && checkedDataList.find(e => e == (props.criteriaType+'-'+data.CriteriaNo+'-'+value)) ? true : false} 
                                                    onChange={(e) => {props.handleActionChange((props.criteriaType+'-'+data.CriteriaNo+'-'+e.currentTarget.value) , e.currentTarget.checked)}} 
                                                    value={value} 
                                                    id={`fortest-${(props.criteriaType+'-'+data.CriteriaNo+'-'+value)}`}
                                                />
                                                {value}
                                            </label>
                                        ) : (<span>{value}</span>)}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div style={{width:'25%' , float:'left' , display : 'inline-block'}}>
                        {props.editMode ? <div><button className="btn btn-primary btn-sm" style={{padding:'2px 4px' , fontSize: '12px' , float:'right'}} onClick={() => {props.handleActionAdd({CriteriaType:props.criteriaType , CriteriaNo:data.CriteriaNo})}}>+</button></div> : null}
                    </div>
                </div>)
            : null}
        </div>
    );
}
/** PropTypes */
UnbanSMSInTableMobile.propTypes = {
    editMode: PropTypes.bool.isRequired,
    criteriaType: PropTypes.string.isRequired,
    handleActionAdd: PropTypes.func.isRequired,
    handleActionChange: PropTypes.func.isRequired,
};

export default UnbanSMSInTableMobile;