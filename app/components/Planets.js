import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { removeCampus } from '../reducers'
import { connect } from 'react-redux'
import DeleteCampus from './DeleteCampus'

export default class Planets extends Component {
    constructor(props) {
        super(props)
        this.state = {
            campus: [],
            students: [],
            campusId: ''
        }
        this.handlePlanet = this.handlePlanet.bind(this)
    }

    componentDidMount() {
        axios.get('/api/campus')
            .then(res => res.data)
            .then(campus => {
                this.setState({ campus })
            })
    }

    handlePlanet() {
        this.setState({
            // campusId: 
        })
    }

    render() {
        return (
            <div>
                <Link className="btn btn-primary" to='/AddCampus'>
                    <span className="glyphicon glyphicon-plus"></span> ADD CAMPUS
                </Link>
                {/* <Link className="btn btn-primary" to='/DeleteCampus/:id'>
                    <span className="glyphicon glyphicon-minus"></span> DELETE CAMPUS
                </Link> */}
                {this.state.campus.map((planet, i) => {
                    return (
                        <div>
                            <Link to={`/SingleCampus/${planet.id}`}>
                                <div
                                    className="planet"
                                    style={{ backgroundImage: 'url(' + planet.planet_image + ')' }}
                                    key={i}>
                                    <h1>{planet.campus_name}</h1>
                                </div>
                                <Link className="btn btn-primary" to={`/DeleteCampus/${planet.id}`}>
                                    <span className="glyphicon glyphicon-minus"></span> DELETE CAMPUS
                                </Link>
                                <Link className="btn btn-primary" to={`/EditCampus/${planet.id}`}>
                                    <span className="glyphicon glyphicon-pencil"></span> EDIT CAMPUS
                                </Link>
                            </Link>
                        </div>
                    )
                })}
            </div>
        )
    }
}


// const mapStateToProps = state => (state)

// // // review 
// // // allow you to dispatch the export

// const mapDispatchToProps = dispatch => ({
//     removeACampus: id => {dispatch(removeCampus(id))}
// })

// // exporting Connect component with connections
// export default connect(mapStateToProps, mapDispatchToProps)(Campus)