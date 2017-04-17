import React from 'react';
import {Table, Grid, Row, Image} from 'react-bootstrap'
import Missionsjson from '../data/missions.json'

const Missions = () => (
  <Grid>
    <Row className="container">
      <Image src={require("../img/misje.jpg")} responsive />
    </Row>
  <Table striped>
    <thead>
    <tr>
      <th><h3 className="titles">Wykonane questy</h3></th>
      <th><h3 className="titles">Zlecający</h3></th>
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