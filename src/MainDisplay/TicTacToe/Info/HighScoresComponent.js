import React from 'react'
import axios from 'axios'

import HighScoresView from './HighScoresView'
import Store from '../../../Store/ReduxStore'
import * as Types from '../../../Store/ActionTypes'

class HighScoresComponent extends React.Component {
    async componentDidMount() {
        axios.get('http://localhost:59248/api/HighScore')
            .then(response => {
                Store.dispatch({
                    type: Types.GET_HIGHSCORES,
                    highScores: response.data,
                  });
            return response;
        });
    }

    render() {
        return (
            <HighScoresView />
        )
    }
}

export default HighScoresComponent;