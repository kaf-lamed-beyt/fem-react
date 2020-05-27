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

function isSearched(searchTerm) {
    return (item) => {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase())
    }
}
export default class Search extends React.Component {
    constructor(props) {
        super(props)

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
        const { value, onChange, searchTerm } = this.props

        return (
            <div className="search__base">
                <form>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={this.isSearched}
                    />
                </form>
                {list.filter(isSearched(searchTerm)).map((item) => {
                    return (
                        <div key={item.objectID}>
                            <span>
                                <a href={item.url}>{item.title}</a>
                            </span>
                        </div>
                    )
                })}
            </div>
        )
    }
}
