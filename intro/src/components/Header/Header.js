import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className="d-flex bd-highlight head">
                <div className="p-2 flex-fill bd-highlight"><strong><h3>Clicky Game</h3></strong></div>
                <div className="p-2 flex-fill bd-highlight"><h3 id="status">{this.props.status}</h3></div>
                <div className="p-2 flex-fill bd-highlight">
                    <div className="p-2 bd-highlight"><h4 id="top-score">Top Score: {this.props.highScore}</h4></div>
                    <hr></hr>
                    <div className="p-2 bd-highlight"><h4 id="score">Score: {this.props.currentScore}</h4></div>
                </div>
            </div>
        )
    }
}

export default Header
