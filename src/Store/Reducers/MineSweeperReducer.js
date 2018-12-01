import * as types from '../ActionTypes'

const initialState = {
    gameState: []
}

function MineSweeperReducer(state = initialState, action) {
    
    switch(action.type) {
        case types.UPDATE_GAME_STATE:
            return Object.assign({}, state, { gameState: action.gameState });
        default:
            return state;
    }
}

export default MineSweeperReducer;