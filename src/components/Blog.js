import React from 'react'

export default class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title || '',
            body: props.body || ''
        }
    }
    
    render() {
        rteurn (
            <div className="blog">

            </div>
        )
    }
}