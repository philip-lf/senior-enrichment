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
                console.log("000", response.data, "000")
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
                <Campus allAvailablePlanets={this.state.planets} click={this.handleClick} />
            </div>
        )
    }
}