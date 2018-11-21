import axios from 'axios';

import * as Types from '../../Store/ActionTypes'
import Store from '../../Store/ReduxStore'
import { Connect } from 'react-redux';
import AddPlayer from "./Player";

class AddHighScorePlayer extends AddPlayer {
    handleAddPlayer(event) {
        event.preventDefault()
        return axios.put('http://localhost:59248/api/HighScore?userName=' + this.state.playerName)
            .then(response => {
                Store.dispatch({
                    type: Types.UPDATE_HIGHSCORES,
                    highScore: response,
                  });
            return response;
        });
    }
}

const mapStateToProps = function(store) {
    return {
        highScores: store.highScoreState.highScores
    };
}

export default Connect(mapStateToProps)(AddHighScorePlayer)