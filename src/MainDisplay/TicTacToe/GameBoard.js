import React from 'react';

function Square(props) {
    return (
        <button className="square" 
                onClick={props.onClick}
                style={props.isHighlightedMove ? {fontWeight: 'bold'} : {fontWeight: 'normal'}}>
            {props.value}
        </button>
    );
}

class GameBoard extends React.Component {
    renderSquare(i, isHighlightedMove) {
        return <Square 
                    value={this.props.squares[i]}
                    onClick={() => this.props.onClick(i)}
                    isHighlightedMove={isHighlightedMove}/>;
    }

    createBoard() {
        let board = [];

        for (let row = 0; row < 3; row++) {
            let children = [];

            for (let column = 0; column < 3; column++) {
                const squareIndex = row*3 + column;
                let isHighlightedMove = squareIndex === this.props.changedIndex || (this.props.winningIndexes != null && this.props.winningIndexes.includes(squareIndex));

                children.push(this.renderSquare(squareIndex, isHighlightedMove));
            }

            board.push(<div className="board-row">{children}</div>);
        }

        return board;
    }

    render() {
        return (
        <div className="game-board">
            {this.createBoard()}
        </div>
        );
    }
}

export default GameBoard;