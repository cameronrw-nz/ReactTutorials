import React from 'react';
import axios from 'axios';

class AddPlayer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            playerName: ""
        }
 
        this.handleChange = this.handleChange.bind(this);
        this.handleAddPlayer = this.handleAddPlayer.bind(this);
    }
    
    handleChange(event) {
        this.setState({ playerName: event.target.value});
    }

    handleAddPlayer(event) {
        event.preventDefault()
        return axios.put('http://localhost:59248/api/Players?userName=' + this.state.playerName);
            //.then(response => {
            //    store.dispatch(deleteUserSuccess(userId));
            //return response;
            //});
    }

    render() {
        if (this.props.visibility) {
            return <div/>;
        }

        return (
            <form onSubmit={this.handleAddPlayer}>
                <input id="textInput" type="text" onChange={this.handleChange}/>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default AddPlayer;
