import React from 'react';
import { connect } from 'react-redux'

// Function for returning the Game info section of the TicTacToe game, contains the current game history and HighScores.
function MineSweeperInfo(props) {
    return (
        <div className="horizontal-display">
            <div className="game-info">
                {props.gameState}
            </div>
        </div>
    );
}

const mapStateToProps = function(store) {
    return {
        gameState: store.mineSweeperState.gameState
    };
}

export default connect(mapStateToProps)(MineSweeperInfo)