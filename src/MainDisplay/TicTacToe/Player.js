import React from 'react'
import axios from 'axios';

class AddPlayer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            playerName: ""
        }
    }
    
    handleAddPlayer(event) {
        event.preventDefault()
        //return axios.post('http://localhost:3001/users/' + userId)
        //    .then(response => {
        //        store.dispatch(deleteUserSuccess(userId));
        //    return response;
        //    });
    }

    render() {
        if (this.props.visibility) {
            return <div/>;
        }

        return (
            <form action={this.handleAddPlayer}>
                <input type="text" name="playerName" value={this.state.playerName}/>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default AddPlayer;
