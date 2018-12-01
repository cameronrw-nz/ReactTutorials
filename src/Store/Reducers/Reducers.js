import { combineReducers } from 'redux'

import HistoryReducer from './HistoryReducer'
import HighScoreReducer from './HighScoreReducer'
import MineSweeperReducer from './MineSweeperReducer';

var reducers = combineReducers({
    historyState: HistoryReducer,
    highScoreState: HighScoreReducer,
    mineSweeperState: MineSweeperReducer
});

export default reducers;