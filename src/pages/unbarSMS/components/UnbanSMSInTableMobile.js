import React from 'react';
import PropTypes from 'prop-types';

const UnbanSMSInTableMobile = ({
        data = null, 
        checkedDataList, 
        criteriaType, 
        editMode, 
        handleActionChange, 
        handleActionAdd,
    }) => {
    return (
        <div>
            {data && data.CriteriaNo ?
                (<div>
                    <div style={{width:'75%' , float:'left' , display : 'inline-block'}}>
                        <div>
                            {
                                data.MobileNoList.map((value , index) => (
                                    <div key={index}>
                                        {editMode ? (
                                            <label>
                                                <input 
                                                    type="checkbox" 
                                                    className="mr-1" 
                                                    checked={checkedDataList && Array.isArray(checkedDataList) && checkedDataList.find(e => e == (criteriaType+'-'+data.CriteriaNo+'-'+value)) ? true : false} 
                                                    onChange={(e) => {handleActionChange((criteriaType+'-'+data.CriteriaNo+'-'+e.currentTarget.value) , e.currentTarget.checked)}} 
                                                    value={value} 
                                                    id={`fortest-${(criteriaType+'-'+data.CriteriaNo+'-'+value)}`}
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
                        {editMode ? <div><button className="btn btn-primary btn-sm" style={{padding:'2px 4px' , fontSize: '12px' , float:'right'}} onClick={() => {handleActionAdd({CriteriaType:criteriaType , CriteriaNo:data.CriteriaNo})}}>+</button></div> : null}
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