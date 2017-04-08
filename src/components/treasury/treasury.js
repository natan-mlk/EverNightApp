import React from 'react'
import {Grid, Button} from 'react-bootstrap'
import {connect} from 'react-redux'

import {change} from '../../state/team-reducer'
import WeaponList from './weapons'

const Treasure = ({value, mojaAkcja}) => {

  return (
  <Grid>
    <h1>Ile skarbów: {value}</h1>
    <Button onClick={() => mojaAkcja()}>Increment</Button>

    <WeaponList/>

  </Grid>
);
}

export default connect(
  state => ({
    value: state.counterValueStore.counterValue,
  }),
  dispatch => ({
    mojaAkcja: (val) => dispatch(change(val))
  })
)(Treasure)