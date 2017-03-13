import React from 'react';
import {Grid, Row, Col, Table} from 'react-bootstrap'
import Heroes from '../data/team.json'
import Others from './others'
import Hero from './heroes'

const TeamView = () => (

  <Grid>
    <h3>Bohaterowie drużyny</h3>
    <Row className="show-grid">
      <Col xs={12} sm={3}><Hero idHero="0" /></Col>
      <Col xs={12} sm={3}><Hero idHero="1" /></Col>
      <Col xs={12} sm={3}><Hero idHero="2" /></Col>
      <Col xs={12} sm={3}><Hero idHero="3" /></Col>
    </Row>


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