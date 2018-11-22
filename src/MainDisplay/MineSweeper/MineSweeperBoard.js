import React from 'react'

import '../../styles/MineSweeper.css';

function Box(props) {
    return (
        <button className="square">
            {props.content}
        </button>
    )
}
class MineSweeperBoard extends React.Component {
    createBoard(boardSize, valueBoard) {
        let board = [];

        for (let row = 0; row < boardSize; row++) {
            let children = [];

            for (let column = 0; column < boardSize; column++) {
                var content = valueBoard[row*boardSize+column];
                if (content == null){
                    content = "-"
                }
                children.push(<Box content={content} />);
            }

            board.push(<div className="board-row">{children}</div>);
        }

        return board;
    }

    render() {
        var bombNumber = 1;
        var boardSize = 10;

        var board = Array(Math.pow(boardSize, 2)).fill(null);
        
        var currentBombNumber = 0;
        while (currentBombNumber < bombNumber) {
            var bombIndex = Math.floor(Math.random()*boardSize*boardSize);
            if (board[bombIndex] === null) {
                board[bombIndex] = "B";
                currentBombNumber++;
            }
        }

        for (var i = 0; i < board.length; i++) {
            if (board[i] === "B"){
                // TODO Refactor this to clean up reusable parts
                // Left
                i < 11 || i%10 === 0 || board[i-11] === "B" ? null : board[i-11] != null ? board[i-11]++ : board[i-11] = 1;
                i%10 === 0 || board[i-1] === "B" ? null : board[i-1] != null ? board[i-1]++ : board[i-1] = 1;
                i > 89 || i%10 === 0|| board[i+9] === "B" ? null : board[i+9] != null ? board[i+9]++ : board[i+9] = 1;
                // Right
                i < 11 || i%10 === 9 || board[i-9] === "B" ? null : board[i-9] != null ? board[i-9]++ : board[i-9] = 1;
                i%10 === 9 || board[i+1] === "B" ? null : board[i+1] != null ? board[i+1]++ : board[i+1] = 1;
                i > 89 || i%10 === 9 || board[i+11] === "B" ? null : board[i+1] != null ? board[i+11]++ : board[i+1] = 1;
                // Top
                i < 11 || board[i-10] === "B" ? null : board[i-10] != null ? board[i-10]++ : board[i-10] = 1;
                // Bottom
                i > 89 || board[i+10] === "B"  ? null : board[i+10] != null ? board[i+10]++ : board[i+10] = 1;
            }
        }

        return (
            <div>
                {this.createBoard(boardSize, board)}
            </div>
        )
    }
}

export default MineSweeperBoard