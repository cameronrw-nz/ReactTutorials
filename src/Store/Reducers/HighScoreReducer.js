import * as types from '../ActionTypes'

const initialState = {
    highScores: []
}

function highScoreReducer(state = initialState, action) {
    
    switch(action.type) {
        case types.GET_HIGHSCORES:
            return Object.assign({}, state, {highScores: action.highScores});
        case types.UPDATE_HIGHSCORES:
            // Check if the new HighScore exists and update
            for (var i = 0; i < state.highScores.length; i++){
                if (state.highScores[i].PlayerUserName === action.highScore.PlayerUserName)
                {
                    return Object.assign(
                        {}, 
                        state, 
                        {highScores: Object.assign(
                            [...state.highScores], 
                            {[i]: Object.assign(
                                {}, 
                                state.highScores[i], 
                                {Score: action.highScore.Score})
                            })
                        });
                }
            }
            
            // When the HighScore doesn't exist then add the HighScore
            return Object.assign({}, state, {highScores: state.highScores.concat([action.highScore])});
        default:
            return state;
    }
}

export default highScoreReducer;