import * as types from '../ActionTypes'

const initialState = {
    history: [{
        squares: Array(9).fill(null),
    }]
}

const historyReducer = function(state = initialState, action) {
    
    switch(action.type) {
        case types.GET_HISTORY_SUCCESS:
            return Object.assign({}, state, {});

        case types.ADD_SQUARES_TO_HISTORY:
        var newHistory = state.history.concat([{
            squares: action.squares,
        }]);
        var x = Object.assign({}, state, { history: newHistory });
        return x; 
    }

    return state;
}

export default historyReducer;