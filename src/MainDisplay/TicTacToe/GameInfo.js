import React from 'react';
import AddPlayer from './HighScorePlayer';

function GameInfo(props) {
    return (
        <div className="game-info">
            <div>{props.status}</div>
            <button onClick={props.onMoveSorting}>Sort</button>
            <ol>{props.moves}</ol>
            <AddPlayer visibility={props.hasWinner}/>
        </div>
    );
}

export default GameInfo;