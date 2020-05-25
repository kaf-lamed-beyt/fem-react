import React from 'react'

const list = [
    {
        title: 'React',
        url: 'https://facebook.github.io/react/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
    },
    {
        title: 'Redux',
        url: 'https://github.com/reactjs/redux',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
    },
]

export default class Search extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            list,
            searchTerm: ''
        }
    }

    onSearchChange(e) {
        this.setState({
            searchTerm: e.target.value
        })
    }
    
    render() {
        return (
            <div className="search__base">
                <form>
                    <input type="text" />
                </form>
            </div>
        )
    }
}
