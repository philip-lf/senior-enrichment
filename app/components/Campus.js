import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Campus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            campus: []
        }
    }

    componentDidMount () {
		axios.get('/api/campus')
			.then(res => res.data)
			.then(campus => {
				this.setState({ campus })
			})
	}

    render() {
        return (
            <div>
                <button>
                        <Link to="/campus">ADD Campus</Link>
                </button>
                {this.state.campus.map((planet, i) => {
                    return (
                        <div>
                            <div
                                className="planet"
                                style={{ backgroundImage: 'url(' + planet.planet_image + ')' }}
                                key={i}
                                onClick={(e) => { this.props.click(e, planet) }}>
                                <h1>{planet.campus_name}</h1>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
