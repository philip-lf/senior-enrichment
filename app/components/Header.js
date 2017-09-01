import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {

    render() {
        return (
            <div> 
                <div>
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