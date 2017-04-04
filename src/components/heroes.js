import React from 'react';
import {Image} from 'react-bootstrap'
import Heroes from '../data/team.json'
import HeroModule from './well'

const Hero = (props) => {

  const chosenHero = parseInt(props.idHero, 10)

  return (
    <div className="centered">
      <p><Image src={Heroes[chosenHero].avatar} alt={Heroes[chosenHero].name} circle responsive/></p>
      <h4>{Heroes[chosenHero].name}</h4>
      <HeroModule myChosenHero={chosenHero}/>
    </div>
  )
}

export default Hero;
