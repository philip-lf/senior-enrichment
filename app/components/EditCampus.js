import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class EditCampus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            campus: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    // handleSubmit() {
    //     console.log("--------", this.props.id)
    //     axios.delete(`/api/DeleteCampus/${this.props.id}`)
    //         .then(function (response) {
    //             console.log('deleted successfully')
    //         });
    // }

    handleSubmit(){
        const campusId = this.props.id;
    
        axios.put(`/api/campus/${campusId}`, {campus_name : this.state.campus})
          .then(() => this.setState({
            campus: ''
          }))
          .then(response => {
              console.log("successfully updated")
          })
      }

    handleChange(event){
        this.setState({
            campus: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            name="campus_name"
                            value={this.state.campus}
                            placeholder="Campus name"
                            onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="button" >Update Campus</button>
                    </div>
                </form>
            </div>
        )
    }
}