import { combineReducers } from 'redux-immutable';

import headerReducer from '../comment/header/store/reducer';

const reducer = combineReducers({

    header: headerReducer,
});

export default reducer;