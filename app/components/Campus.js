import React, { Component } from 'react'

export default class Campus extends Component {

    render() {
        const divStyle = {
            backgroundImage: 'url(' + this.props.img +')'
        }

        return (
            <div className="planet" style={divStyle}>
                <h1>{this.props.name}</h1>
                <h1>{this.props.location}</h1>
            </div>
        )
    }
}
