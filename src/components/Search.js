import React from 'react'

export default class Search extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            searchTerm:''
        }

        this.onSearchChange = this.onSearchChange.bind(this)
    }

    onSearchChange(e) {
        this.setState({
            searchTerm: e.target.value,
        })
    }

    render() {
        const { value, onSearchChange } = this.props

        return (
            <div className="search__base">
                <form>
                    <input
                        type="text"
                        value={value}
                        onChange={onSearchChange}
                    />
                </form>
            </div>
        )
    }
}
