import React from "react"
import ReactDOM from "react-dom"

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            firstname: '',
        }

        this.handleNameChange = this.handleNameChange.bind(this)
    };

    handleNameChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    render() {
      const { firstname } = this.state
      
        return (
            <div className="app">
                <form>
                    <label>
                        First name
                        <input
                            type="text"
                            name="firstname"
                            placeholder="enter your name"
                            value={firstname}
                            onChange={this.handleNameChange}
                        />
                    </label>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))
