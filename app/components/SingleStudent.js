import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class SingleStudent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            student: {}
        }
    }

    componentDidMount() {  
        console.log("this.props.match.params.studentId")
        console.log(+this.props.match.params.studentId)
        let id = +this.props.match.params.studentId
        return axios.get(`/api/student/personal/${id}`)
        .then(res => {
            console.log('get res data', res.data)
            return res.data
        } )
        .then(oneStudent => {
            console.log(oneStudent)
            this.setState({
                student: oneStudent[0]
            })
        })
    }

    render() {
        return (
            <div>
                <p>student name</p>
                <p>First Name: {this.state.student.first_name}</p>
                <p>Last Name: {this.state.student.last_name}</p>
                <p>Email: {this.state.student.email}</p>
                <p>Phone Number: {this.state.student.phone_number}</p>
                <p>CampusId: {this.state.student.campusId}</p>
            </div>
        )
    }
}