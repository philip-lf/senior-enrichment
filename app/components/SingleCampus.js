import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class SingleCampus extends Component {
    constructor(props) {
        super(props)
    }

    handleSubmit(event) {
        axios.delete(`api/campus/${this.props.match.params.id}`)
        .then(function(response){
          console.log('deleted successfully')
        }); 
    }

    render() {
        console.log("im in SingleCampus")
        let students = this.props.students.filter(student => {
            return +this.props.id === student.campusId
        }) // returns array with matching id

        let planets = this.props.planets.filter(planet => {
            return +this.props.id === planet.id
        }) // returns array with matching id


        return (
            
            <div>
                <div>
                    {students.map((student, i) => (
                        <p key={i}>{student.first_name}</p>
                    ))}
                </div>
                <div>
                    {planets.map((planet, i) => (
                        <div
                            className="planet"
                            style={{ backgroundImage: 'url(' + planet.planet_image + ')' }}
                            key={i}>
                            <h1>{planet.campus_name}</h1>
                        </div>
                    ))}
                </div>
                {/* <form onSubmit={this.handleSubmit}>
                    <button type="submit" className="button">Delete Campus</button>
                </form> */}
            </div>
        )
    }
}