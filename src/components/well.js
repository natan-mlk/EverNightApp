import React from 'react';
import {Well, Button, Collapse} from 'react-bootstrap'
import Heroes from '../data/team.json'

class HeroModule extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {};
  }

  render() {
    const chosenHero = parseInt(this.props.myChosenHero, 10)
    return (
      <div className="my-well">
        <Button onClick={ () => this.setState({open: !this.state.open})}>
          Czytaj więcej
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well className="centered">
              <p><b>Rola:</b> {Heroes[chosenHero].class}</p>
              <p><b>Rasa:</b> {Heroes[chosenHero].rasa}</p>
              {Heroes[chosenHero].description}
              <p><b>Wiodące skille:</b> {Heroes[chosenHero].skille}</p>
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default HeroModule;