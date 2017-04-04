import React from 'react';
import {Grid, Row, Col, Table} from 'react-bootstrap'
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

    <h3>Obsługa bazy</h3>

    <Others />

  </Grid>
);

export default TeamView;