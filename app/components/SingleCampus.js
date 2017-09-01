import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class SingleCampus extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log("im in SingleCampus")
        console.log("dogdog",this.props.id)
        let students = this.props.students.filter(student => {
            return +this.props.id === student.campusId
        }) // returns array with matching id

        let planets = this.props.planets.filter(planet => {
            return +this.props.id === planet.id
        }) // returns array with matching id

        console.log("-----------------")

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
            </div>
        )
    }
}