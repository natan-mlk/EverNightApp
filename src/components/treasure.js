import React from 'react'
import {Grid, Button} from 'react-bootstrap'
import {connect} from 'react-redux'

import {change} from '../state/team-reducer'

const Treasure = ({value, mojaAkcja}) => {

  return (
  <Grid>
    <p> SKARBY</p>

    <h1>Ile skarbów: {value}</h1>
    <Button onClick={(val) => mojaAkcja(val)}>Increment</Button>
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