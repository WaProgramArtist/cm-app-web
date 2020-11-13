const initialState = {
    id: '',
    name: '',
    score: 0,
    birth: null,
  };

const exampleReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SETVALUE':
            return handleSetValue(state, action.payload);
        case 'GETVALUE':
            return handleGetValue(state);
        default:
            return state;
    }
};

export { exampleReducer }; 

const handleSetValue = (state, data) => {
    console.log('Payload --> ', data);

    return { ...state, id: data.id, name: data.name, score: data.score, birth: data.birth };
};

const handleGetValue = (state) => ({
    ...state,
});