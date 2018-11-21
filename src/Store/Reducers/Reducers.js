import { combineReducers } from 'redux'

import HistoryReducer from './HistoryReducer'
import HighScoreReducer from './HighScoreReducer'

var reducers = combineReducers({
    historyState: HistoryReducer,
    highScoreState: HighScoreReducer
});

export default reducers;