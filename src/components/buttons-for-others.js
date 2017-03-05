import React from 'react'
import ButtonControls from './button-controls'

const ButtonsForOthers = props => (
  <div>
    <ButtonControls
      buttons = {[
      {label: 'Pokaż elfy',
      handleClick: props.elfy},

      {label: 'Pokaż ludzi',
      handleClick: props.ludzie},

      {label: 'Wszyscy',
      handleClick: props.wszyscy}
    ]} />

  </div>
);


export default ButtonsForOthers