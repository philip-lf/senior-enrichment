import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {removeCampus} from '../reducers'
import {connect} from 'react-redux'

export default class Planets extends Component {
    constructor(props) {
        super(props)
        this.state = {
            campus: [],
            students: [],
            campusId: ''
        }
        this.handleClick = this.handleClick.bind(this)
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

    handleClick() {

    }

    render() {
        return (
            <div>
                <Link className="btn btn-primary" to='/AddCampus'>
                    <span className="glyphicon glyphicon-plus"></span> ADD CAMPUS
                </Link>
                
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
                            </Link>
                            <button 
                                onClick={this.handleClick} 
                                id={i}>
                                <span className="glyphicon glyphicon-minus"></span> REMOVE CAMPUS
                            </button>
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