import React from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap'
import Others from './others'
import Hero from './heroes'

const TeamView = () => (

  <Grid>
    <Row className="container">
      <Image src={require("../img/team.jpg")} responsive />
    </Row>
    <Row className="accent-back">
      <h3>Główni bohaterowie</h3>
    </Row>

    <Row className="container  accent-back">
      <Col xs={12} sm={6} md={3}><Hero idHero="0" /></Col>
      <Col xs={12} sm={6} md={3}><Hero idHero="1" /></Col>
      <Col xs={12} sm={6} md={3}><Hero idHero="2" /></Col>
      <Col xs={12} sm={6} md={3}><Hero idHero="3" /></Col>
    </Row>

    <h3 className="titles">Obsługa bazy</h3>

    <Others />
  </Grid>
);

export default TeamView;