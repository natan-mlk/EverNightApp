import React from 'react';
import {Well, Button, Collapse} from 'react-bootstrap'
import Heroes from '../data/team.json'

class Example extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {};
  }

  render() {
    const chosenHero = parseInt(props.idHero, 10)

    return (
      <div>
        <Button onClick={ ()=> this.setState({ open: !this.state.open })}>
          Czytaj więcej
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              {chosenHero.name}
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Example;