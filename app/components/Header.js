import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import StudentTable from './StudentTable'

export default class Campus extends Component {

    render() {
        // uses bootstrap
        return (
            <div className="container"> 
                <div className="jumbotron">
                    <h1>Margaret Hamilton Interplanetary Academy of JavaScript</h1>
                    <button>
                        <Link to="/campus">HOME</Link>
                    </button>
                    <button>
                        <Link to="/student">STUDENTS</Link>
                    </button>
                </div>
            </div>
        )
    }
}