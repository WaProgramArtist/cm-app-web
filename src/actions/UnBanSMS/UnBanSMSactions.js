export const SET_SEARCH_CRITERIA_TYPE = 'UnBanSMS/setSearchCriteriaType';
export const SET_SEARCH_CRITERIA_INTER = 'UnBanSMS/setSearchCriteriaInput';
export const SET_EDIT_MODE = 'UnBanSMS/setEditMode';
export const SET_CHECKED_DATA_LIST = 'UnBanSMS/setCheckedDataList';
export const SET_CHECKED_DATA_LIST_PUSH = 'UnBanSMS/setCheckedDataList/push';
export const SET_CHECKED_DATA_LIST_SPLICE = 'UnBanSMS/setCheckedDataList/splice';

export const setSearchCriteriaType = (payload) => ({type: SET_SEARCH_CRITERIA_TYPE, payload : payload});
export const setSearchCriteriaInput = (payload) => ({type: SET_SEARCH_CRITERIA_INTER, payload : payload});
export const setEditMode = (payload) => ({type: SET_EDIT_MODE, payload : payload});
export const setCheckedDataList = (payload) => ({type: SET_CHECKED_DATA_LIST, payload : payload});
export const setCheckedDataListPush = (payload) => ({type: SET_CHECKED_DATA_LIST_PUSH, payload : payload});
export const setCheckedDataListSplice = (payload) => ({type: SET_CHECKED_DATA_LIST_SPLICE, payload : payload});