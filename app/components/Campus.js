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
            imageClicked: false
        }
    }

    handlePlanetClick(event) {

    }

    render() {
        return (
            <div>
                {this.props.allAvailablePlanets.map((planet, i, j) => {
                    return (
                        <div>
                            <div
                                className="planet"
                                style={{ backgroundImage: 'url(' + planet.planet_image + ')' }}
                                key={i}
                                onClick={(e) => { this.props.click(e, planet) }}>
                                <h1>{planet.campus_name}</h1>
                            </div>
                            <p>{planet.student_name}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}
