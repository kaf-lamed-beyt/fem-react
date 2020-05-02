import React from "react"
import ReactDOM from "react-dom"

export default class SignUpForm extends React.Component {
    constructor() {
        super()
        this.state = {
            firstname: '',
        }
    }

    render() {
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

ReactDOM.render(<SignUpForm />, document.getElementById("root"))
