import * as types from '../ActionTypes'

const initialState = {
    players: []
}

function playerReducer(state = initialState, action) {
    
    switch(action.type) {
        case types.ADD_PLAYER:
            return Object.assign({}, state, state.players.concat([{ player:action.playerName }]));
    }

    return state;
}

export default playerReducer;