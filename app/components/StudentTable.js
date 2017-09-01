import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class StudentTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            student: [],
            value: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        axios.get('/api/student')
            .then(res => res.data)
            .then(student => {
                this.setState({ student })
            })
    }

    handleChange(event) {
		this.setState({ value: event.target.value })
	}

    render() {
        return (
            <div>
                <div>
                    <button>
                        <Link to="/AddStudent">ADD</Link>  
                    </button>
                </div>
                <table>
                    <tr>
                        <th>Student ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Campus</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    <tr>
                        {this.state.student.map((info) => {
                            console.log("babe")
                            return (
                                <div>
                                    <td>
                                        <Link to={`/student/${info.id}`}>{info.id}</Link>
                                    </td>
                                    <td>{info.first_name}</td>
                                    <td>{info.last_name}</td>
                                    <td>{info.campusId}</td>
                                    <td>{info.email}</td>
                                    <td>
                                        <Link to={`/student/update/${info.id}`}>
                                            <button>EDIT</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to={`/student/delete/${info.id}`}>
                                            <button>X</button>
                                        </Link>
                                    </td>
                                </div>
                            )
                        })}
                    </tr>
                </table>
            </div>
        )
    }
}