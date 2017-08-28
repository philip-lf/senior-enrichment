import React, {Component} from 'react'
import Campus from './Campus'

export default class MainPage extends Component {
    render() {
        return (
            <div>
                <Campus />
                <h1>NAME OF CAMPUS</h1>
                <h1>LOCATION OF CAMPUS</h1>
            </div>
        )
    }
}