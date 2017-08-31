import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class SingleCampus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            campus: '',
            imageURL: 'https://il8.picdn.net/shutterstock/videos/1204594/thumb/1.jpg'
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event) {
        axios.post('/api/campus', { campus_name: this.state.campus, planet_image: this.state.imageURL})
        .then(function(response){
          console.log('saved successfully')
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
                    <div>
                        <h2>New Campus</h2>
                        <div>
                            <input
                                type="text"
                                value={this.state.campus}
                                onChange={this.handleChange}/>
                        </div> 
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}