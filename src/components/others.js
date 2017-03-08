import React from 'react';
import {Grid, Table} from 'react-bootstrap'
import {connect} from 'react-redux'

const Others = ({otherPeople}) => (
  <Grid>
    <h3>Ludzie w bazie</h3>

    <Table striped>
      <thead>
      <tr>
        <th>Imię</th>
        <th>Rasa</th>
      </tr>
      </thead>
      <tbody>
      {otherPeople.map(
        (arg, index) => (
          <tr key={index}><td>{arg.name}</td><td>{arg.rasa}</td></tr>
        )
      )}
      </tbody>
    </Table>

  </Grid>
);

export default connect(
  state => ({
    otherPeople: state.myTeam.Others,
  })
)(Others)