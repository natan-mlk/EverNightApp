import React from 'react';
import {Grid, Table} from 'react-bootstrap'
import {connect} from 'react-redux'


const WeaponList = ({allWeapons}) => (

  <Grid>
    <h3>Broń drużyny</h3>

    <Table striped>
      <thead>
      <tr>
        <th>Rodzaj</th>
        <th>Broń</th>
        <th>Ile warta</th>
      </tr>
      </thead>
      <tbody>
      {allWeapons.map(
        (arg, index) => (
          <tr key={index}>
            <td>{arg.weaponClass}</td>
            <td>{arg.weapon}</td>
            <td>{arg.worth}</td>
          </tr>)
      )}

      </tbody>
    </Table>
  </Grid>
);

export default connect(
  state => ({
    allWeapons: state.weapons.WeaponsList,
  })
)(WeaponList)