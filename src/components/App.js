import React from 'react'
import PostForm from './Blog'

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
                <PostForm title={currentTitle} body={currnetBody} />
            </div>
        )
    }
}
