import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Planets from './Planets'
import axios from 'axios'
import Header from './Header'
import StudentTable from './StudentTable'
import SingleStudent from './SingleStudent'
import AddCampus from './AddCampus'
import SingleCampus from './SingleCampus'

export default class MainPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            planets: [],
            students: [],
            selectedCampus: null,
            homeButton: true
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        console.log("componentDidMount in MainPage is being called")
        axios.get('/api/campus')
        .then((response) => {
            this.setState({
                planets: response.data
            })
        })
        .catch(console.error.bind(console))
        
        axios.get('/api/student')
        .then((response) => {
            this.setState({
                students: response.data
            })
        })
        .catch(console.error.bind(console))
    }

    handleClick(e, campus) {
        console.log("handleClick in MainPage is being called")
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
        console.log("studentHandleClick in MainPage is being called")
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
                            <Route exact path="/campus" component={Planets} />
                            <Route path="/AddCampus" component={AddCampus} />
                            <Route path="/SingleCampus/:id" render={(routeProps) => { 
                                console.log("dog", this.state.planets)
                                return (
                                    <SingleCampus 
                                        id={routeProps.match.params.id} // the id ex. 1,2,3...
                                        students={this.state.students}
                                        planets={this.state.planets}/> 
                                )
                            }} />
                            <Route exact path="/student" component={StudentTable} />
                            <Route path="/student/:studentId" component={SingleStudent} />
                        </switch>
                    </div>
                </div>
            </Router>
        )
    }
}