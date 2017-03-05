import React from 'react'
import ButtonControls from './button-controls'
//import Others from './others'
import OtherPeople from '../data/others.json'

class FilterButtons extends React.Component {
  constructor(props) {
    super(props)

    this.handleElfClick = () => this.setState(

    OtherPeople.map(
      (arg, index) => (
        <tr key={index}><td>{arg.name}</td><td>{arg.rasa}</td></tr>
      )
    )
    )
  }

  render() {
    return (
      <div>
        <h3>klikaj w przyciski</h3>

        <ButtonControls
          increment={this.handleElfClick}
        />

      </div>
    )

  }
}

export default FilterButtons