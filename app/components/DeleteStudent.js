import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class DeleteStudent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            student: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit() {
        const id = this.props.match.params.id
        axios.delete(`/api/student/${id}`)
        .then(function(response){
          console.log('deleted successfully')
        }); 
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>Are you sure you want to delete student?</p>
                    <button type="submit" className="button">Yes, DELETE</button>
                </form>
            </div>
        )
    }
}