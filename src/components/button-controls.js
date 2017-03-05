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

ButtonControls.propTypes = {
  buttons: React.PropTypes.arrayOf(React.PropTypes.shape({
    handleClick: React.PropTypes.func.isRequired,
    label: React.PropTypes.string.isRequired
  }))
}

export default ButtonControls




