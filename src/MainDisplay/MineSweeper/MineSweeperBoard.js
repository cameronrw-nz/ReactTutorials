import React from 'react'
import { connect } from 'react-redux'

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
        else if (this.props.isFlagged){
            display = (
                <button className="minesweeper-square-flag" onContextMenu={(event) => this.props.onDoubleClick(event, this.props.index)}/>
            )
        } 
        else {
            display = (
                <button className="minesweeper-square" onClick={this.props.onClick} onContextMenu={(event) => this.props.onDoubleClick(event, this.props.index)} />
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
            flaggedIndexes: [],
            gameIteration: 0
        }

        this.handleDoubleClick = this.handleDoubleClick.bind(this);
    }

    expandSelected(index, currentlySelected) {
        const size = this.props.boardSize;

        // TODO Refactor this mess
        // Left
        if (index > size-1 && index%size !== 0 && !currentlySelected.includes(index-size-1)){
            currentlySelected.push(index-size-1)
            if (this.state.board[index-size-1] === null) {
                currentlySelected = this.expandSelected(index-size-1, currentlySelected)
            }
        }
        if (index%size !== 0 && !currentlySelected.includes(index-1)){
            currentlySelected.push(index-1)
            if (this.state.board[index-1] === null) {
                currentlySelected = this.expandSelected(index-1, currentlySelected)
            }
        }
        if (index < Math.pow(size, 2)-size-1 && index%size !== 0 && !currentlySelected.includes(index+size-1)){
            currentlySelected.push(index+size-1)
            if (this.state.board[index+size-1] === null) {
                currentlySelected = this.expandSelected(index+size-1, currentlySelected)
            }
        }

        // Right
        if (index > size-1 && index%size !== size-1 && !currentlySelected.includes(index-size+1)){
            currentlySelected.push(index-size+1)
            if (this.state.board[index-size+1] === null) {
                currentlySelected = this.expandSelected(index-size+1, currentlySelected)
            }
        }
        if (index%size !== size-1 && !currentlySelected.includes(index+1)){
            currentlySelected.push(index+1)
            if (this.state.board[index+1] === null) {
                currentlySelected = this.expandSelected(index+1, currentlySelected)
            }
        }
        if (index < Math.pow(size, 2)-size-1 && index%size !== size-1 && !currentlySelected.includes(index+size+1)){
            currentlySelected.push(index+size+1)
            if (this.state.board[index+size+1] === null) {
                currentlySelected = this.expandSelected(index+size+1, currentlySelected)
            }
        }

        // Top
        if (index > size-1 && !currentlySelected.includes(index-size)){
            currentlySelected.push(index-size)
            if (this.state.board[index-size] === null) {
                currentlySelected = this.expandSelected(index-size, currentlySelected)
            }
        }

        // Bottom
        if (index < Math.pow(size, 2)-size-1 && !currentlySelected.includes(index+size)){
            currentlySelected.push(index+size)
            if (this.state.board[index+size] === null) {
                currentlySelected = this.expandSelected(index+size, currentlySelected)
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

    handleDoubleClick(event, index) {
        event.preventDefault();
        var flaggedIndexes = this.state.flaggedIndexes;
        
        if (flaggedIndexes.includes(index)){
            flaggedIndexes.splice(
                flaggedIndexes.findIndex(function(element) {
                    return element === index
                })
            , 1);
        }
        else {
            flaggedIndexes.push(index)
        }

        this.setState({
            flaggedIndexes: flaggedIndexes
        })
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
                const size = this.props.boardSize;

                // TODO Refactor this to clean up reusable parts
                // Left
                i < size+1 || i%size === 0 || board[i-size-1] === "B" ? null : board[i-size-1] != null ? board[i-size-1]++ : board[i-size-1] = 1;
                i%size === 0 || board[i-1] === "B" ? null : board[i-1] != null ? board[i-1]++ : board[i-1] = 1;
                i > Math.pow(size, 2)-size-1 || i%size === 0|| board[i+size-1] === "B" ? null : board[i+size-1] != null ? board[i+size-1]++ : board[i+size-1] = 1;
                // Right
                i < size+1 || i%size === size-1 || board[i-size+1] === "B" ? null : board[i-size+1] != null ? board[i-size+1]++ : board[i-size+1] = 1;
                i%size === size-1 || board[i+1] === "B" ? null : board[i+1] != null ? board[i+1]++ : board[i+1] = 1;
                i > Math.pow(size, 2)-size-1 || i%size === size-1 || board[i+size+1] === "B" ? null : board[i+size+1] != null ? board[i+size+1]++ : board[i+size+1] = 1;
                // Top
                i < size+1 || board[i-size] === "B" ? null : board[i-size] != null ? board[i-size]++ : board[i-size] = 1;
                // Bottom
                i > Math.pow(size, 2)-size-1 || board[i+size] === "B"  ? null : board[i+size] != null ? board[i+size]++ : board[i+size] = 1;
            }
        }

        this.setState({
            board: board
        });
    }

    createBoard() {
        let board = [];
        var flaggedIndexes = this.state.flaggedIndexes;

        for (let row = 0; row < this.props.boardSize; row++) {
            let children = [];

            for (let column = 0; column < this.props.boardSize; column++) {
                const currentIndex = row * this.props.boardSize + column;
                var content = this.state.board[currentIndex];
                if (content == null){
                    content = "";
                }

                children.push(<Box  
                                content={content}
                                index={currentIndex}
                                onClick={() => this.handleClick(currentIndex)}
                                onDoubleClick={this.handleDoubleClick}
                                isSelected={this.state.selectedIndexes.includes(currentIndex)}
                                isFlagged={flaggedIndexes.includes(currentIndex)} />);
            }

            board.push(<div className="board-row">{children}</div>);
        }

        return board;
    }

    render() {
        if (this.props.boardSize === 0) {
            return (
                <div />
            )
        }
        
        if (this.props.gameIteration !== this.state.gameIteration) {
            this.setState({
                board: [],
                selectedIndexes: [],
                flaggedIndexes: [],
                gameIteration: this.props.gameIteration
            })
        }

        if (this.state.board.length === 0){
            this.initiliseBoard();
        }

        return (
            <div>
                {this.createBoard()}
            </div>
        )
    }
}

const mapStateToProps = function(store) {
    return {
        bombNumber: store.mineSweeperState.bombNumber,
        boardSize: store.mineSweeperState.boardSize,
        gameIteration: store.mineSweeperState.gameIteration
    };
}

export default connect(mapStateToProps)(MineSweeperBoard)