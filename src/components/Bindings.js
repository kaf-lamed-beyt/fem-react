import React from 'react'

// This example tries to explain bindings in class components
class ExplainBindingsComponent extends React.Component {
    constructor() {
        super()

        this.onClickMe = this.onClickMe.bind(this)
    }

    onClickMe() {
        console.log(this)
    }

    render() {
        return (
            <button onClick={this.onClickMe}>Click me</button>
            /**
             *  // when you click this button you get a 'undefined' logged to the
             * developer console, because if you want to acces `this.state` in your class method,
             * it can't be retrieved because `this` is undefined.
             * The binding process needs to carried out so as to ensure that `this` is accessible in your class methods
             */
        )
    }
}

export default ExplainBindingsComponent
