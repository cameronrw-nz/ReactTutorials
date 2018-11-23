import React from 'react'
import { connect } from 'react-redux'

function sortHighScores(highScores) {
    //highScores.sort(function (highScore1, highScore2) {
    //    return highScore1[1] > highScore2[1];
    //});

    return highScores;
}

function HighScoresView(props) {
    const sortedHighScores = sortHighScores(props.highScores);

    const highScores = sortedHighScores.map((highScore, index) => {
        return (
            <li key={highScore.PlayerUserName}>
                <div className="highscore-row">
                    <p>{highScore.PlayerUserName} {highScore.Score}</p>
                </div>
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