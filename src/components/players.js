import React from 'react';
import {Image} from 'react-bootstrap'
import Players from '../data/playersAll.json'


const Player = (props) => {

  const chosenPlayer = parseInt(props.idPlayer, 10)

  return (
    <div className="centered">
      <p></p>
      <h4>{Players[chosenPlayer].name}</h4>
      <p className="player-quote">"{Players[chosenPlayer].description}"</p>
    </div>
  )
}

export default Player;
