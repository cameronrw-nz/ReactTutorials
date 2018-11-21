import React from 'react'
import { connect } from 'react-redux'

function sortHighScores(highScores) {
    highScores.sort(function (highScore1, highScore2) {
        return highScore1[1] > highScore2[1];
    });

    return highScores;
}

function HighScoresView(props) {
    const sortedHighScores = sortHighScores(props.highScores);

    const highScores = sortedHighScores.map((step, highScore) => {
        return (
            <li key={highScore.playerName}>
                {highScore.Score}
            </li>
        )
    });

    return (
        <ul>
            {highScores}
        </ul>
    )
}

const mapStateToProps = function(store) {
    return {
        highScores: store.highScoreState.highScores
    };
}

export default connect(mapStateToProps)(HighScoresView)