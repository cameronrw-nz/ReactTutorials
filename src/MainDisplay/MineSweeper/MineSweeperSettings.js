import React from 'react'
import { connect } from 'react-redux'

import Store from '../../Store/ReduxStore'
import * as Types from '../../Store/ActionTypes'

function secondsToHms(time) {
    time = Number(time);
    var hours = Math.floor(time / 3600);
    var minutes = Math.floor(time % 3600 / 60);
    var seconds = Math.floor(time % 3600 % 60);

    var hoursDisplay = hours > 0 ? hours : "";
    var minutesDisplay = minutes > 0 ? minutes : "";
    return hoursDisplay + minutesDisplay + seconds; 
}

class MineSweeperSettings extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            time: 0
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleGameReset = this.handleGameReset.bind(this)
    }

    startTimer() {
        this.setState({
            time: 0
        });

        this.interval = setInterval(() => this.setState({ time: this.state.time + 1 }), 1000);
    }

    handleClick(boardSize, bombNumber) {
        Store.dispatch({
            type: Types.UPDATE_BOARD,
            boardSize: boardSize,
            bombNumber: bombNumber,
        })

        this.startTimer();
    }
    
    handleGameReset() {
        Store.dispatch({
            type: Types.RESET_GAME,
        })

        this.startTimer();
    }

    render() {
        if (this.props.gameState !== null) {
            clearInterval(this.interval);
            this.interval = null;
        }

        var timeString = secondsToHms(this.state.time) ;

        return (
            <div className="minesweeper-header">
                <button onClick={() => this.handleClick(10, 10)}>
                    Small 10x10
                </button>
                <button onClick={() => this.handleClick(15, 20)}>
                    Medium 15x15
                </button>
                <button onClick={() => this.handleClick(20, 30)}>
                    Large 20x20
                </button>
                <button onClick={() => this.handleGameReset()}>
                    Reset
                </button>
                <div className="minesweeper-timer">
                    {"Time: " + timeString}
                </div>
            </div>
        )
    }
}

const mapStateToProps = function(store) {
    return {
        gameState: store.mineSweeperState.gameState
    };
}

export default connect(mapStateToProps)(MineSweeperSettings)