import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class SingleStudent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            student: [],
            value: ''
        }
    }

    componentDidMount(student) {  
        console.log(student)   
        axios.get(`/api/student/${student.id}`)
            .then(res => res.data)
            .then(student => {
                this.setState({student})
            })
    }

    handleChange(event) {
		this.setState({ value: event.target.value })
	}

    render() {
        return (
            <div>
                <p>wazzzzzup</p>
            </div>
        )
    }
}