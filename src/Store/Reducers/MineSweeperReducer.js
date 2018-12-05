import * as types from '../ActionTypes'

const initialState = {
    gameState: [],
    bombNumber: 0,
    boardSize: 0,
    gameIteration: 0
}

function MineSweeperReducer(state = initialState, action) {
    
    switch(action.type) {
        case types.UPDATE_GAME_STATE:
            return Object.assign({}, state, { gameState: action.gameState });
        case types.UPDATE_BOARD:
            return Object.assign(
                {}, 
                state, 
                { 
                    bombNumber: action.bombNumber,
                    boardSize: action.boardSize,
                    gameIteration: state.gameIteration+1,
                    gameState: []
                });
        case types.RESET_GAME:
            return Object.assign(
                {}, 
                state, 
                { 
                    gameIteration: state.gameIteration+1,
                    gameState: []
                });
        default:
            return state;
    }
}

export default MineSweeperReducer;