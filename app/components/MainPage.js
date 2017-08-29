import React, { Component } from 'react'
import Campus from './Campus'
import axios from 'axios'

export default class MainPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            planets: [],
            selectedCampus: null
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        axios.get('/api/campus')
            .then((response) => {
                console.log("000000000", response.data, "00000000")
                this.setState({
                    planets: response.data
                })
                console.log("111", response.data, "111")
            })
            .catch(console.error.bind(console))
    }

    handleClick(e, campus) {
        console.log("-----------------------", campus)
        e.preventDefault()
        axios.get(`/api/campus/${campus.id}`)
        .then(response => {response.data})
        .then(data => {
            this.setState({
                selectedCampus: data
            })
        })
        .catch(console.error.bind(console));
    }

    render() {
        {console.log(this.state.planets)}
        return (
            <div>
                <Campus
                    name="mars"
                    allAvailablePlanets={this.state.planets}
                    img="https://vignette4.wikia.nocookie.net/deathbattlefanon/images/5/5a/Sand.jpg/revision/latest?cb=20160503011426"
                    click={this.handleClick} />

                {/* <Campus name="luna" location="2" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFXqCKGuzGkMjk6Z3TmFDl0WxaJ7tY3kpvXWqVJyCg9V3K8NVdrw" />
                <Campus name="terra" location="3" img="http://pixelquarium.com/portfolio/papers/businesscards/water.jpg" />
                <Campus name="titan" location="4" img="http://images.all-free-download.com/images/graphiclarge/fire_element_200077.jpg" /> */}

            </div>
        )
    }
}