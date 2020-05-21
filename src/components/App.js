import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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

function TodoItems(props) {
    return <li>{props.value}</li>
}

function TodoList(props) {
    const todos = props.todos
    const todoItems = todos.map(todo => {
        <TodoItems key={todo} value={todo} />
    })
    return <ul>{todoItems}</ul>
}

const todos = [
    'one big fat chicken',
    'two big fat chickens',
    'three big fat fickity fackity chickens',
]


class App extends Component {
    render() {
        return (
            <div className="app">
                <h1>Hello</h1>
                {list.map((item, key) => {
                    return (
                        <div key={key}>
                            <span>
                                <a href={item.url}>{item.title}</a>
                            </span>
                            <span>{item.author}</span> {''}
                            <span>{item.num_comments}</span> {''}
                            <span>{item.points}</span>
                        </div>
                    )
                })}
                <TodoList todos={todos} />
            </div>
        )
    }
}

export default App
