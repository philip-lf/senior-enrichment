import React, {Component} from 'react'
import Campus from './Campus'

export default class MainPage extends Component {
    render() {
        return (
            <div>
                <Campus name="mars" location="1" img="https://vignette4.wikia.nocookie.net/deathbattlefanon/images/5/5a/Sand.jpg/revision/latest?cb=20160503011426"/>
                <Campus name="luna" location="2" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFXqCKGuzGkMjk6Z3TmFDl0WxaJ7tY3kpvXWqVJyCg9V3K8NVdrw"/>
                <Campus name="terra" location="3" img="http://pixelquarium.com/portfolio/papers/businesscards/water.jpg"/>
                <Campus name="titan" location="4" img="http://images.all-free-download.com/images/graphiclarge/fire_element_200077.jpg"/>
            </div>
        )
    }
}