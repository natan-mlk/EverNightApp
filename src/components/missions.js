import React from 'react';
import {Table, Grid} from 'react-bootstrap'
import Missionsjson from '../data/missions.json'

const Missions = () => (
  <Grid>
  <Table striped>
    <thead>
    <tr>
      <th><h3>Wykonane questy</h3></th>
      <th><h3>Zlecający</h3></th>
    </tr>
    </thead>
    <tbody>
    {Missionsjson.map(
      (arg, index) => (
        <tr key={index}><td>{index + 1} - {arg.missionName}</td><td>{arg.questGiver}</td></tr>
      )
    )}
    </tbody>
  </Table>
  </Grid>
)

export default Missions;