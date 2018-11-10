import * as types from '../ActionTypes'

const initialState = {
    playersList: []
}

const playerReducer = function(state = initialState, action) {
    
    switch(action.type) {
        case types.ADD_PLAYER:
        return Object.assign({}, state, state.playersList.concat([{ player:action.player }]));
    }

    return state;
}

export default playerReducer;