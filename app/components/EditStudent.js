import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class EditStudent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allCampuses: [],
            first_name: '',
            last_name: '',
            email: '',
            phone_number: '',
            campusId: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
        this.handleLastNameChange = this.handleLastNameChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this)
        this.handleCampusIdChange = this.handleCampusIdChange.bind(this)
    }

    componentDidMount () {
        axios.get('/api/campus')
          .then(res => res.data)
          .then(campuses => this.setState({ 
              allCampuses: campuses 
        }));
    }

    handleSubmit() {
        const id = this.props.match.params.id;

        axios.put(`/api/student/${id}`, {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            phone_number: this.state.phone_number,
            campusId: this.state.campusId
        })
        .then(() => this.setState({
            first_name: '',
            last_name: '',
            email: '',
            phone_number: '',
            campusId: ''
        }))
        .then(response => {
            console.log("successfully updated")
        })
    }

    handleFirstNameChange(event) {
        this.setState({
            first_name: event.target.value
        })
        console.log(event.target.value)
    }

    handleLastNameChange(event) {
        this.setState({
            last_name: event.target.value
        })
        console.log(event.target.value)
    }

    handleEmailChange(event) {
        this.setState({
            email: event.target.value
        })
        console.log(event.target.value)
    }

    handlePhoneNumberChange(event) {
        this.setState({
            phone_number: event.target.value
        })
        console.log(event.target.value)
    }

    handleCampusIdChange(event) {
        this.setState({
            campusId: event.target.value
        })
        console.log(event.target.value)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            value={this.state.first_name}
                            placeholder="First Name"
                            onChange={this.handleFirstNameChange} />
                        <input
                            type="text"
                            value={this.state.last_name}
                            placeholder="Last Name"
                            onChange={this.handleLastNameChange} />
                        <input
                            type="text"
                            value={this.state.email}
                            placeholder="Email"
                            onChange={this.handleEmailChange} />
                        <input
                            type="text"
                            value={this.state.phone_number}
                            placeholder="(xxx) xxx-xxxx"
                            onChange={this.handlePhoneNumberChange} />
                        {/* <input
                            type="text"
                            value={this.state.campusId}
                            placeholder="Campus ID"
                            onChange={this.handleCampusIdChange} /> */}

                        <select onChange={event => this.setState({ campusId: +event.target.value })}>
                            <option>Select a Campus</option>
                            {
                                this.state.allCampuses.map(campus => {
                                    return (
                                        <option 
                                            key={campus.id}
                                            name="Campus ID"
                                            value={campus.id}> 
                                            {campus.campus_name} 
                                        </option>
                                    )
                                })
                            }
                        </select>

                    </div>
                    <div className="form-group">
                        <button type="submit" className="button">Update Campus</button>
                    </div>
                </form>
            </div>
        )
    }
}