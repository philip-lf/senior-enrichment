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
                    <label>Name</label>
                    <div>
                        <input 
                            type="text" 
                            value={this.state.value}
                            onChange={this.handleChange}/>
                    </div>
                    <button>
                        <Link to="/student">ADD</Link>  
                    </button>
                </div>
                <table>
                    <tr>
                        <th>Student ID</th>
                        <th>Name</th>
                        <th>Campus</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    <tr>
                        {this.state.student.map((info) => {
                            return (
                                <div>
                                    <td>
                                        <Link to={`/student/${info.id}`}>{info.id}</Link>
                                    </td>
                                    <td>{`${info.first_name} ${info.last_name}`}</td>
                                    <td>{info.email}</td>
                                    <td>
                                        <Link to={`/student/${info.id}`}>
                                            <button>Edit</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to={`/student/${info.id}`}>
                                            <button>X</button>
                                        </Link>
                                    </td>
                                </div>
                            )
                        })}
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
                <span>Waazup</span>
            </div>
        )
    }
}