import React from 'react';

class DateString extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: Date().toLocaleString()
        };
    }
    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: Date().toLocaleString() }), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="date">
                <p>{this.state.time}</p>
            </div>
        );
    }
}

export default DateString