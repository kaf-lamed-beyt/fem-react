import React from 'react'
import Search from './Search'
import Table from './Table'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.onSearchChange = this.onSearchChange.bind(this)
        this.onDismiss = this.onDismiss.bind(this)
    }

    onDismiss(id) {
        const { list } = this.state
        function isNotId(item) {
            return item.objectID !== id
        }

        const updatedList = list.filter(isNotId) // filters the list that doesn't correspond with the provided id
        this.setState({
            list: updatedList,
        })
    }

    render() {
        const { searchTerm, list } = this.state
        return (
            <div className="app">
                <Search value={searchTerm} onChange={this.onSearchChange} />
                <Table />
            </div>
        )
    }
}

export default App
