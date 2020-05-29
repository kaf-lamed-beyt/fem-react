import React from 'react'
import recos from '../assets/list'

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                {recos.map(listItem => {
                    <div key={listItem.objectID}>
                        <span>
                            <a href={listItem.url}>{listItem.author}</a>
                        </span>
                    </div>
                })}
            </div>
        )
    }
} 