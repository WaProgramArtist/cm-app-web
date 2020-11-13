const exampleSetValueAction = (data) => {
    return {
        type: 'SETVALUE',
        payload: data,
    };
};

const exampleGetValueAction = () => {
    return {
        type: 'GETVALUE',
        payload: null,
    };
};

export {
    exampleSetValueAction,
    exampleGetValueAction
}