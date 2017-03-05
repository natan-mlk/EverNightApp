import React from 'react';
import {Grid, Table} from 'react-bootstrap'
import OtherPeople from '../data/others.json'

const Others = () => (
  <Grid>
    <h3>Pracownicy w bazie</h3>

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
  </Grid>
);

export default Others;