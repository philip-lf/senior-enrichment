import React, { Component } from 'react'

const images = {
    mars: "https://vignette4.wikia.nocookie.net/deathbattlefanon/images/5/5a/Sand.jpg/revision/latest?cb=20160503011426",
    luna: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFXqCKGuzGkMjk6Z3TmFDl0WxaJ7tY3kpvXWqVJyCg9V3K8NVdrw",
    terra: "http://pixelquarium.com/portfolio/papers/businesscards/water.jpg",
    titan: "http://images.all-free-download.com/images/graphiclarge/fire_element_200077.jpg",
    newImage: "https://il8.picdn.net/shutterstock/videos/1204594/thumb/1.jpg"
}

export default class Campus extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                {this.props.allAvailablePlanets.map((planet, i) => {
                        return (
                        <div
                            className="planet"
                            style={{ backgroundImage: 'url(' + this.props.img + ')' }}
                            key={i}
                            onClick={(e) => {this.props.click(e, planet)}}>
                            <h1>{this.props.name}</h1>
                        </div>
                )})}
            </div>
        )
    }
}
