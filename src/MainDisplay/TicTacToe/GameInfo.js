import React from 'react';
import AddPlayer from './HighScorePlayer';

// Function for returning the Game info section of the TicTacToe game, contains the current game history and HighScores.
function GameInfo(props) {
    return (
        <div>
            <div className="game-info">
                <div>{props.status}</div>
                <button onClick={props.onMoveSorting}>Sort</button>
                <ol>{props.moves}</ol>
                <AddPlayer visibility={props.hasWinner}/>
            </div>
        </div>
    );
}

export default GameInfo;