import React from 'react';

import MineSweeperSettings from './MineSweeperSettings'
import MineSweeperBoard from './MineSweeperBoard'
import MineSweeperInfo from './MineSweeperInfo'

import '../../Styles/MineSweeper.css';

class MineSweeper extends React.Component {
    render() {
        return (
            <div>
                <h1>MineSweeper</h1>
                <MineSweeperSettings />
                <div className="minesweeper-div">
                    <MineSweeperBoard />
                    <MineSweeperInfo />
                </div>
            </div>
        )
    }
}

export default MineSweeper