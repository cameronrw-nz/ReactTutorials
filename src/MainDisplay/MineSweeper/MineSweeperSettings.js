import React from 'react'

import Store from '../../Store/ReduxStore'
import * as Types from '../../Store/ActionTypes'

class MineSweeperSettings extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(boardSize, bombNumber) {
        Store.dispatch({
            type: Types.UPDATE_BOARD,
            boardSize: boardSize,
            bombNumber: bombNumber,
        })
    }

    
    handleGameReset() {
        Store.dispatch({
            type: Types.RESET_GAME,
        })
    }

    render() {
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
            </div>
        )
    }
}

export default MineSweeperSettings