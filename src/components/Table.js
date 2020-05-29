import React from 'react'
import list from '../assets/list'


function isSearched(searchTerm) {
    return (item) => {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase())
    }
}
export default class Table extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            updatedList: '',
            list
        }

        this.onDeleteClick = this.onDeleteClick.bind(this)
    }
    
    onDeleteClick(id) {
        const { list } = this.props
        function isNotId(item) {
            return item.objectID !== id
        }

        const updatedList = list.filter(isNotId())
        this.setState({
            list: updatedList
        })
    }

    render() {
        const { list, pattern, onDeleteClick } = this.props
        return (
            <div>
                {list.filter(isSearched(pattern)).map(item => {
                    <div key={item.objectID}>
                        <span>
                            <a href={item.url} >{item.title}</a>
                        </span>
                        <span>{item.author}</span>
                        <span>{item.num_comments}</span>
                        <span>{item.points}</span>
                        <span>
                            <button onClick={() => onDeleteClick(item.objectID)}>
                                delete
                            </button>
                        </span>
                    </div>
                })}
            </div>
        )
    }
}

