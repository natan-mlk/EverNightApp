import React from 'react';
import {Grid, Table} from 'react-bootstrap'
import {connect} from 'react-redux'

const Others = ({otherPeople}) => (
    <Table striped>
      <thead>
      <tr>
        <th><h4 className="titles">Kto?</h4></th>
        <th><h4 className="titles">Klasa/zawód/cech</h4></th>
      </tr>
      </thead>
      <tbody>
      {otherPeople.map(
        (arg, index) => (
          <tr key={index}><td>{arg.name}</td><td>{arg.class}</td></tr>
        )
      )}
      </tbody>
    </Table>
);

export default connect(
  state => ({
    otherPeople: state.myTeam.Others,
  })
)(Others)