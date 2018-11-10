import React from 'react';

function GameInfo(props) {
    return (
        <div className="game-info">
            <div>{props.status}</div>
            <button onClick={props.onMoveSorting}>Sort</button>
            <ol>{props.moves}</ol>
        </div>
    );
}

export default GameInfo;