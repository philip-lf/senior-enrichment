import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Campus from './Campus'
import axios from 'axios'
import Header from './Header'
import StudentTable from './StudentTable'
import SingleStudent from './SingleStudent'
import SingleCampus from './SingleCampus'

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
        return (
            <Router>
                <div>
                    <Header/>
                    <div>
                        <switch>
                            <Route exact path="/campus" component={Campus} />
                            <Route path="/SingleCampus" component={SingleCampus} />
                            <Route exact path="/student" component={StudentTable} />
                            <Route path="/student/:studentId" component={SingleStudent} />
                            {/* <Route path="/campus/removing" component={SingleStudent} /> */}
                        </switch>
                    </div>
                    {/* <Footer /> */}
                </div>
            </Router>
        )
    }
}