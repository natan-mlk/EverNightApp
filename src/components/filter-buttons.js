import React from 'react'
import ButtonControls from './button-controls'
//import Others from './others'
import {Grid, Table} from 'react-bootstrap'
import OtherPeople from '../data/others.json'

class FilterButtons extends React.Component {
  constructor(props) {
    super(props)

    this.handleElfClick = () => this.setState(

      <Table striped>
        <thead>
        <tr>
          <th>Imię</th>
          <th>Rasa</th>
        </tr>
        </thead>
        <tbody>
        {OtherPeople.map(
          (arg, index) => (
            <tr key={index}><td>{arg.name}</td><td>{arg.rasa}</td></tr>
          )
        )}
        </tbody>
      </Table>
    )
  }

  render() {
    return (
      <div>
        <h3>klikaj w przyciski</h3>

        <ButtonControls
          elfy={this.handleElfClick}
        />

        <ButtonControls
          ludzie={this.handleElfClick}
        />

        <ButtonControls
          wszyscy={this.handleElfClick}
        />

      </div>
    )

  }
}

export default FilterButtons