import { combineReducers } from 'redux';

import { exampleReducer } from './example/reducerExample';
import { UnBanSMSreducers } from './unBanSMS/UnBanSMSreducers';

const rootReducer = combineReducers({
    exampleReducer,
    UnBanSMSreducers,
});

export default rootReducer;