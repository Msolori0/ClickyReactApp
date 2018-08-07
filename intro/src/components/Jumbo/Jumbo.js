import React, { Component } from 'react'
import './Jumbo.css'

class Jumbo extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid" id="intro">
                <h1>Clicky Game!</h1>
                <p>Click on an image to earn points, just don't click twice! or game OVER!</p>
            </div>
        )
    }
}

export default Jumbo