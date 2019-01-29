import React from "react";

function RedditView(props) {
    var content = []
    if (props.savedCategories !== undefined) {
        props.savedCategories.forEach((value, key) => {
            content.push(
                <div>
                    {key}
                    <div>
                        {value.map(item => <div><a href={`http://www.reddit.com${item.permalink}`}>{item.name}</a></div>)}
                    </div>
                </div>
            )
        });
    }
    return (
        <div>
            {content}
        </div>
    )
}

export default RedditView;