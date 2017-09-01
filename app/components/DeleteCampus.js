import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class DeleteCampus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            campus: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit() {
        console.log("--------",this.props.id)
        axios.delete(`/api/DeleteCampus/${this.props.id}`)
        .then(function(response){
          console.log('deleted successfully')
        }); 
    }

    handleChange(event) {
        this.setState({
            campus: event.target.value
        })
        console.log(event.target.value)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit" className="button" >Delete Campus</button>
                </form>
            </div>
        )
    }
}