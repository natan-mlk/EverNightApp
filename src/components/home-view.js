import React from 'react';
import {Grid, Row, Image, Col} from 'react-bootstrap'
import Player from './players'

const HomeView = () => (

  <Grid>
    <Row className="container">
      <Image src={require("../img/homepage-pic.jpg")} responsive/>
    </Row>

    <Row className="container">
      <h3>Gracze SKB:</h3>
    </Row>

    <Row className="container">
      <Col xs={12} sm={6} md={3}><Player idPlayer="0" /></Col>
      <Col xs={12} sm={6} md={3}><Player idPlayer="1" /></Col>
      <Col xs={12} sm={6} md={3}><Player idPlayer="2" /></Col>
      <Col xs={12} sm={6} md={3}><Player idPlayer="3" /></Col>
    </Row>

    <Row>
      <blockquote>
        <p>Podstawowe założenie Evernight - czyli 'zepsucie' tak fajnego i ciekawego świata inwazją obcych było,
          nie tylko dla mnie, zawodem. Pomysł grup bohaterów przyjmujących zlecenia na potwory i wszelkie zło
          w świecie hi-fantasy jest za dobry, by go marnować - od tej myśli była prosta droga do propozycji
          zrobienia kampanii w tym klimacie.</p>
        <p>Nie musiałem długo czekać na chętnych, gracze są póki co zadowoleni;
          oprócz typowego grania przewidziałem także aspekt ekonomiczny (utrzymanie i rozbudowa siedziby grupy),
          a także marketing (opłacanie bardów) i inne rzeczy, które planuję wdrażać w miarę wzrostu siły Drużyny
          Bohaterów.</p>
        <footer>Sir Acid, Mistrz Gry</footer>
      </blockquote>
    </Row>

  </Grid>
);

export default HomeView;