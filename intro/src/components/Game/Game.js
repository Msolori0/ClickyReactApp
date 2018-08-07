import React from 'react'
import './Game.css'

const Game = props => (
    <div className="col-md-3">
        <img className="tile" alt={props.name} src={props.image} onClick={() =>
            props.checkGuess(props.id)} />
    </div>
)

export default Game