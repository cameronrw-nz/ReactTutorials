import React from 'react';

import AddPlayer from './HighScorePlayer';
import HighScoresComponent from './HighScoresComponent'

// Function for returning the Game info section of the TicTacToe game, contains the current game history and HighScores.
function GameInfo(props) {
    return (
        <div className="horizontal-display">
            <div className="game-info">
                <div>{props.status}</div>
                <button onClick={props.onMoveSorting}>Sort</button>
                <ol>{props.moves}</ol>
                <AddPlayer visibility={props.hasWinner}/>
            </div>
            <HighScoresComponent />
        </div>
    );
}

export default GameInfo;