import React from "react";
import snoowrap from "snoowrap";

import RedditView from "./RedditView";

const allowedSubreddits = [
    "r/reactjs",
    "r/programming",
    "r/csharp",
    "r/web_design",
    "r/javascript",
]

class RedditController extends React.Component {
    constructor(props) {
        super (props);

        this.state = {
            savedCategories: undefined
        }
    }

    async componentDidMount() {
        // Replace with actual connection to reddit.
        const r = new snoowrap({
            userAgent: 'Saved Info/0.1 by Darzolak',
            clientId: '',
            clientSecret: '',
            username: '',
            password: '' 
        });
            
        var me = await r.getMe()
        var saved = await me.getSavedContent().fetchAll();

        var savedCategories = new Map();
        saved.forEach(element => {
            if (allowedSubreddits.find(name => name === element.subreddit_name_prefixed)) {
                if (savedCategories.get(element.subreddit_name_prefixed) === undefined) {
                    savedCategories.set(element.subreddit_name_prefixed, [{name: element.title, permalink: element.permalink}]);
                }
                else {
                    savedCategories.get(element.subreddit_name_prefixed).push({name: element.title, permalink: element.permalink});
                }
            }
        });

        this.setState({savedCategories})
    }

    render () {
        return (
            <RedditView savedCategories={this.state.savedCategories} />
        )
    }
}

export default RedditController;