import React from 'react'
import Binds from './Bindings'
import Clock from './Clock'


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
    const todoItems = todos.map(todo => 
        <TodoItems key={todo} value={todo} />
    )
    return <ul>{todoItems}</ul>
}

const todos = [
    'one big fat chicken',
    'two big fat chickens',
    'three big fat fickity fackity chickens',
]


function Greet(props) {
    return <h1>{props.message}</h1>
}
class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            list,
        }

        this.onDismiss = this.onDismiss.bind(this)  
    }


    onDismiss(id) {
        const { list } = this.state
        function isNotId(item) {
            return item.objectID !== id
        }

        const updatedList = list.filter(isNotId) // filters the list that doesn't correspond with the provided id
        this.setState({
            list: updatedList
        })
    }

    render() {
        const { list } = this.state
        return (
            <div className="app">
                <Greet message="Hello props" />
                {list.map((item) => {
                    return (
                        <div key={item.objectID}>
                            <span>
                                <a href={item.url}>{item.title}</a>
                            </span>
                            <span>{item.author}</span>
                            <span>{item.points}</span>
                            <span>{item.num_comments}</span>
                            <div>
                            <button onClick={() => this.onDismiss(item.objectID)}>Dismiss</button>
                            </div>
                        </div>
                    )
                })}
                <TodoList todos={todos} />
                <Binds />
                <Clock />
            </div>
        )
    }
}

export default App
