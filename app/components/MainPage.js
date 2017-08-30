import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Campus from './Campus'
import axios from 'axios'
import Header from './Header'
import StudentTable from './StudentTable'

export default class MainPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            planets: [],
            selectedCampus: null,
            homeButton: true
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        axios.get('/api/campus')
            .then((response) => {
                this.setState({
                    planets: response.data
                })
            })
            .catch(console.error.bind(console))
    }

    handleClick(e, campus) {
        e.preventDefault()
        axios.get(`/api/campus/${campus.id}`)
            .then(response => { response.data })
            .then(data => {
                this.setState({
                    selectedCampus: data
                })
            })
            .catch(console.error.bind(console));
    }

    studentHandleClick() {
        this.setState({
            homeButton: false
        })
    }

    render() {
        // let campus;
        // if (this.state.homeButton) { // Page opens up directly to the home page, Campus Component, which displays all the campuses(planets)
        //     campus = <Campus allAvailablePlanets={this.state.planets} click={this.handleClick} />
        // } else { // when student button is selected you go to the StudentTable Component 
        //     campus = <StudentTable onClick={this.studentHandleClick} />
        // }

        return (
            <Router>
                <div>
                    <Header/>
                    <div>
                        <switch>
                            <Route exact path="/campus" component={Campus} />
                            <Route path="/student" component={StudentTable} />
                        </switch>
                    </div>
                    {/* <Footer /> */}
                </div>
            </Router>
        )
    }
}