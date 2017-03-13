import React from 'react';
import {Grid, Table} from 'react-bootstrap'
import Heroes from '../data/team.json'
import Others from './others'
import Hero from './heroes'

const TeamView = () => (

  <Grid>
    <Hero idHero="0" />
    <Hero idHero="1" />
    <Hero idHero="2" />

    <h3>Bohaterowie drużyny</h3>



    <Table striped>
      <thead>
      <tr>
        <th>Imę</th>
        <th>Klasa postaci</th>
        <th>Wiodące skille</th>
      </tr>
      </thead>
      <tbody>
      {Heroes.map(
        arg => (
          <tr key={arg.id}>
            <td>{arg.name}</td>
            <td>{arg.class}</td>
            <td>{arg.skille.map(
              (skill) => skill + ", "
            )
            }</td>
          </tr>)
      )}
      </tbody>
    </Table>

    <Others />

  </Grid>
);

export default TeamView;