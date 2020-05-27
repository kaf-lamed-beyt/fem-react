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

export default class Table extends React.Component {
    constructor() {
        super()

        this.state = {
            list,
        }
    }
    
    render() {
        const { list, pattern, onDismiss } = this.props

        return (
            <div>
                {list.filter(isSearched(pattern)).map((item) => {
                    <div key={item.objectID}>
                        <span>
                            <a href={item.url}>{item.title}</a>
                        </span>
                        <span>{item.author}</span>
                        <span>{item.num_comments}</span>
                        <span>{item.points}</span>
                        <button onClick={() => onDismiss(item.objectID)}>
                            Delete
                        </button>
                    </div>
                })}
            </div>
        )
    }
}
