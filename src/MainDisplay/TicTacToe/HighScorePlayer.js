import AddPlayer from "./Player";
import axios from 'axios';

class AddHighScorePlayer extends AddPlayer {
    handleAddPlayer(event) {
        event.preventDefault()
        return axios.put('http://localhost:59248/api/HighScore?userName=' + this.state.playerName);
            //.then(response => {
            //    store.dispatch(deleteUserSuccess(userId));
            //return response;
            //});
    }
}

export default AddHighScorePlayer;