const setSearchLoginResult = (data) => {
    return {
        type: 'SETSEARCHLOGINRESULT',
        payload: data,
    };
};

const getSearchLoginResult = () => {
    return {
        type: 'GETSEARCHLOGINRESULT',
        payload: null,
    };
};

export {
    setSearchLoginResult,
    getSearchLoginResult
}