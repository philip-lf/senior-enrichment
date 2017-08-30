import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Campus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            student: []
        }
    }

    componentDidMount() {
        axios.get('/api/student')
            .then(res => res.data)
            .then(student => {
                this.setState({ student })
            })
    }

    render() {
        return (
            <div>
                <div>
                    <button>
                        <Link to="/student">ADD</Link>
                    </button>
                    <table>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Campus</th>
                            <th>Delete?</th>
                        </tr>
                        <tr>
                            {this.state.student.map((info) => {
                                return (
                                    <div>
                                        <td>{info.id}</td>
                                        <td>{info.name}</td>
                                        <td>{info.email}</td>
                                        <td>{info.CampusId}</td>
                                    </div>
                                )
                            })}
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}