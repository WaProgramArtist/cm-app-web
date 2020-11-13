import { combineReducers } from 'redux';

import { exampleReducer } from './example/reducerExample';

const rootReducer = combineReducers({
    exampleReducer,
});

export default rootReducer;