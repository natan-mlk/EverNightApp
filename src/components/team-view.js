import React from 'react';
import {Grid, Table} from 'react-bootstrap'
import Heroes from '../data/team.json'
import Others from './others'

const TeamView = () => (

  <Grid>
    <h3>Bohaterowie drużyny "Sokoły"</h3>

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