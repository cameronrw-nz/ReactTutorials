import { combineReducers } from 'redux'

import HistoryReducer from './HistoryReducer'

var reducers = combineReducers({
    historyState: HistoryReducer
});

export default reducers;