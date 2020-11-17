const initialState = {
    searchCriteriaType: 'CIRCUIT_TOL_TVS',
    searchCriteriaInput: '',
    editMode: false,
    searchCriteriaData: [],
    checkedDataList: [],
    paginationInfo: {
        currentPage : 1,
        limitPerPage : 100,
    }
};

const UnBanSMSreducers = (state = initialState, action) => {
    switch (action.type) {
        case 'UnBanSMS/setSearchCriteriaType':
            return { ...state, searchCriteriaType: action.payload };
        case 'UnBanSMS/setSearchCriteriaInput':
            return { ...state, searchCriteriaInput: action.payload };
        case 'UnBanSMS/setEditMode':
            return { ...state, editMode: action.payload };
        case 'UnBanSMS/setCheckedDataList':
            return { ...state, checkedDataList: action.payload };
        case 'UnBanSMS/setCheckedDataList/push':
            return { ...state, checkedDataList: [...state.checkedDataList , action.payload] };
        case 'UnBanSMS/setCheckedDataList/splice':
            let temp = [...state.checkedDataList];
            temp.splice(temp.indexOf(action.payload),1);
            return { ...state, checkedDataList : temp};
        default:
            return state;
    }
};

export { UnBanSMSreducers }; 