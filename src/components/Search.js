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

// A higher order function that serves as a param to the filter func.
function isSearched(keyword) {
    return function(item) {
        return item.tilte.toLowerCase().includes(keyword.toLowerCase())
    }
}

export default class Serach extends React.Component {
    constructor() {
        super()

        this.state = {
            list,
            searchTerm: '',
        }

        this.onSearchChange = this.onSearchChange.bind(this)
    }

    onSearchChange(e) {
        this.setState({
            searchTerm: e.target.value,
        })
    }

    render() {
        return (
            <div className="search">
                <input type="text" onChange={this.onSearchChange} />
                {list.filter(isSearched(this.state.searchTerm)).map((item) => {
                    return (
                        <ul key={item.objectID}>
                            <li>
                                {' '}
                                Book Title: <a href={item.url}>{item.title}</a>
                            </li>
                            <li>Author: {item.author}</li>
                            <li>Comments: {item.num_comments}</li>
                            <li>Popularity: {item.points}</li>
                            <div>
                                <button
                                    onClick={() =>
                                        this.onDeleteClick(item.objectID)
                                    }
                                >
                                    delete
                                </button>
                            </div>
                        </ul>
                    )
                })}
            </div>
        )
    }
}
