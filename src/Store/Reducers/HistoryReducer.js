import * as types from '../ActionTypes'

const initialState = {
    history: [{
        squares: Array(9).fill(null),
    }]
}

function historyReducer(state = initialState, action) {
    
    switch(action.type) {
        case types.ADD_SQUARES_TO_HISTORY:
            var newHistory = action.history.concat([{
                    squares: action.squares,
                }]);
            return Object.assign({}, state, { history: newHistory });
    }

    return state;
}

export default historyReducer;