import React from 'react'

import Store from '../../Store/ReduxStore'
import * as Types from '../../Store/ActionTypes'

class Box extends React.Component {
    render() {
        let display;
        if (this.props.isSelected)
        {
            display = (
                <div className="selected">
                    {this.props.content}
                </div>
            );
        }
        else {
            display = (
                <button className="minesweeper-square" onClick={this.props.onClick} />
            );
        }

        return display;
    }
}

class MineSweeperBoard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            board: [],
            selectedIndexes: [],
        }
    }

    expandSelected(index, currentlySelected) {
        // TODO Refactor this mess
        // Left
        if (index > 9 && index%10 !== 0 && !currentlySelected.includes(index-11)){
            currentlySelected.push(index-11)
            if (this.state.board[index-11] === null) {
                currentlySelected = this.expandSelected(index-11, currentlySelected)
            }
        }
        if (index%10 !== 0 && !currentlySelected.includes(index-1)){
            currentlySelected.push(index-1)
            if (this.state.board[index-1] === null) {
                currentlySelected = this.expandSelected(index-1, currentlySelected)
            }
        }
        if (index < 89 && index%10 !== 0 && !currentlySelected.includes(index+9)){
            currentlySelected.push(index+9)
            if (this.state.board[index+9] === null) {
                currentlySelected = this.expandSelected(index+9, currentlySelected)
            }
        }

        // Right
        if (index > 9 && index%10 !== 9 && !currentlySelected.includes(index-9)){
            currentlySelected.push(index-9)
            if (this.state.board[index-9] === null) {
                currentlySelected = this.expandSelected(index-9, currentlySelected)
            }
        }
        if (index%10 !== 9 && !currentlySelected.includes(index+1)){
            currentlySelected.push(index+1)
            if (this.state.board[index+1] === null) {
                currentlySelected = this.expandSelected(index+1, currentlySelected)
            }
        }
        if (index < 89 && index%10 !== 9 && !currentlySelected.includes(index+11)){
            currentlySelected.push(index+11)
            if (this.state.board[index+11] === null) {
                currentlySelected = this.expandSelected(index+11, currentlySelected)
            }
        }

        // Top
        if (index > 9 && !currentlySelected.includes(index-10)){
            currentlySelected.push(index-10)
            if (this.state.board[index-10] === null) {
                currentlySelected = this.expandSelected(index-10, currentlySelected)
            }
        }

        // Bottom
        if (index < 89 && !currentlySelected.includes(index+10)){
            currentlySelected.push(index+10)
            if (this.state.board[index+10] === null) {
                currentlySelected = this.expandSelected(index+10, currentlySelected)
            }
        }

        return currentlySelected;
    }

    handleClick(index) {
        var newSelectedIndexes = this.state.selectedIndexes.slice();
        newSelectedIndexes.push(index);

        if (this.state.board[index] == null){
            newSelectedIndexes = this.expandSelected(index, newSelectedIndexes);
        }

        if (this.state.board[index] === "B")
        {
            Store.dispatch({
                type: Types.UPDATE_GAME_STATE,
                gameState: "You Lose"
              });
        }
        else if ((Math.pow(this.props.boardSize, 2) - newSelectedIndexes.length) === this.props.bombNumber)
        {
            Store.dispatch({
                type: Types.UPDATE_GAME_STATE,
                gameState: "You Win"
              });
        }

        this.setState({
            selectedIndexes: newSelectedIndexes
        });
    }

    initiliseBoard() {
        var board = Array(Math.pow(this.props.boardSize, 2)).fill(null);

        var currentBombNumber = 0;
        while (currentBombNumber < this.props.bombNumber) {
            var bombIndex = Math.floor(Math.random() * this.props.boardSize * this.props.boardSize);
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

        this.setState({
            board: board
        });
    }

    createBoard() {
        let board = [];

        for (let row = 0; row < this.props.boardSize; row++) {
            let children = [];

            for (let column = 0; column < this.props.boardSize; column++) {
                const currentIndex = row * this.props.boardSize + column;
                var content = this.state.board[currentIndex];
                if (content == null){
                    content = "-";
                }

                children.push(<Box  
                                content={content}
                                onClick={() => this.handleClick(currentIndex)}
                                isSelected={this.state.selectedIndexes.includes(currentIndex)} />);
            }

            board.push(<div className="board-row">{children}</div>);
        }

        return board;
    }

    render() {
        if (this.state.board.length == 0){
            this.initiliseBoard();
        }

        return (
            <div>
                {this.createBoard()}
            </div>
        )
    }
}

export default MineSweeperBoard