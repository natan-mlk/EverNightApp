import React from 'react'
import {Button} from 'react-bootstrap'


const ButtonControls = props => (
  <div>
    {
      props.buttons.map(
        (button, index) => (
          <Button key={index} onClick={button.handleClick}>
            {button.label}
          </Button>
        )
      )
    }
  </div>
)


export default ButtonControls




