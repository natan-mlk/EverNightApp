import React from 'react';
//import {Grid} from 'react-bootstrap'
import Heroes from '../data/team.json'

const Hero = (props) => {

  const chosenHero = parseInt(props.idHero, 10)

    return (
  <div>
    <h3>{Heroes[chosenHero].name}</h3>
    <img src={Heroes[chosenHero].avatar} alt={Heroes[chosenHero].name} />
  </div>
)}

export default Hero;
