import React from 'react';
import './styles/index.css';

function Square(props) {
    return (
        <button className="square" 
                onClick={props.onClick}
                style={props.isHighlightedMove ? {fontWeight: 'bold'} : {fontWeight: 'normal'}}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
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
        <div>
            {this.createBoard()}
        </div>
        );
    }
}

class TicTacToe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
            sortedAscending: true
        }
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext});
    }

    handleMoveSorting() {
        this.setState({
            sortedAscending: !this.state.sortedAscending
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winningIndexes = calculateWinner(current.squares);
        const sortedHistory = this.state.sortedAscending ? history.slice() : history.slice().reverse();

        let winner = "";
        if (winningIndexes != null) {
            winner = current.squares[winningIndexes[0]];
        }
        
        let changedIndex = 0;
        if (this.state.stepNumber > 0) {
            changedIndex = calculateIndexChanged(current.squares, history[this.state.stepNumber-1].squares);
        }

        const moves = sortedHistory.map((step, move) => {
            let desc;
            let index = this.state.sortedAscending ? move : history.length - move-1;
            
            if (index) {
                const previousSquares = history[index-1].squares.slice();
                const currentSquares = history[index].squares.slice();
                
                const previousIndex = calculateIndexChanged(currentSquares, previousSquares);
                desc = 'Go to move #' + index + ' (X:' + previousIndex%3 + ', Y:' + Math.floor(previousIndex/3) + ')';
            } else {
                desc = 'Go to game start.';
            }

            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(index)}>{desc}</button>
                </li>
            )
        });
        
        let status;
        if (winningIndexes == null && this.state.stepNumber === 9)
        {
            status = 'The game was a draw!'
        }
        else if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
        <div className="game">
            <div className="game-board">
                <Board 
                    squares={current.squares}
                    onClick={(i) => this.handleClick(i)}
                    changedIndex={changedIndex} 
                    winningIndexes={winningIndexes}/>
            </div>
            <div className="game-info">
                
                <div>{status}</div>
                <button onClick={() => this.handleMoveSorting()}>Sort</button>
                <ol>{moves}</ol>
            </div>
        </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i=0; i < lines.length; i++){
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return lines[i];
        }
    }

    return null;
}

function calculateIndexChanged(currentSquares, previousSquares) {
    for (let i = 0; i < currentSquares.length; i++) {
        if (currentSquares[i] !== previousSquares[i]) {
            return i;
        }
    }

    return -1;
}

export default TicTacToe