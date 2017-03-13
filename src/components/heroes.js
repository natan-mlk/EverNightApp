import React from 'react';
import {Grid, Well, Image} from 'react-bootstrap'
import Heroes from '../data/team.json'
import Example from './well'

const Hero = (props) => {

  const chosenHero = parseInt(props.idHero, 10)

  return (
    <div className="centered">
      <h4>{Heroes[chosenHero].name}</h4>
      <p><Image src={Heroes[chosenHero].avatar} alt={Heroes[chosenHero].name} circle responsive/></p>
      <Example />
    </div>



  )
}

export default Hero;
