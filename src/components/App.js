import React from 'react'
import Table from './Table'
import Search from './Search'

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

export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            list,
        }

        this.onDeleteClick = this.onDeleteClick.bind(this)
    }

    onDeleteClick(id) {
        const { list } = this.state
        const isNotId = (item) => {
            return item.objectID !== id
        }

        const updatedList = list.filter(isNotId)
        this.setState({
            list: updatedList,
        })
    }

    render() {
        const { list } = this.state

        return (
            <div className="app">
                <Search />
                <h1>C'mon for God sake!!</h1>
                {list.map((item) => {
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
