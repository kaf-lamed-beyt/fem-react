import React from 'react'

class Clock extends React.Component {
    constructor() {
        super()

        this.state = {
            date: new Date(),
        }
    }

    tick() {
        this.setState({
            date: new Date(),
        })
    }

    // lifecycle methods
    componentDidMount() {
        this.timerID = setInterval(() => this.tick())
    }

    componentWillUnmount() {
        clearInterval(timerID)
    }

    render() {
        const { date } = this.state

        return (
            <div>
                <h1>Hello joshua</h1>
                <h2>The time is {date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default Clock
