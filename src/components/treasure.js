import React from 'react'
import {Grid, Button} from 'react-bootstrap'
import {connect} from 'react-redux'

const Treasure = ({value, change}) => {

  return (
  <Grid>
    <p> SKARBY!!!</p>

    <h1>Ile skarbów: {value}</h1>
    <Button onClick={() => change(1)}>Increment</Button>
  </Grid>
);
}

export default connect(
  state => ({
    value: state.counterValueStore.counterValue,
  })
)(Treasure)