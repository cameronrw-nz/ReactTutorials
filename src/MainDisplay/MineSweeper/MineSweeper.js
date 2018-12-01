import React from 'react';

import MineSweeperBoard from './MineSweeperBoard'
import MineSweeperInfo from './MineSweeperInfo'

import '../../Styles/MineSweeper.css';

class MineSweeper extends React.Component {
    render() {
        return (
            <div>
                <h1>MineSweeper</h1>
                <div className="minesweeper-div">
                    <MineSweeperBoard bombNumber={5} boardSize={10} />
                    <MineSweeperInfo />
                </div>
            </div>
        )
    }
}

export default MineSweeper