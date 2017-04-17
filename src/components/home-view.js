import React from 'react';
import {Grid, Row, Image} from 'react-bootstrap'

/*
<Carousel>
<Carousel.Item>
<img width={900} height={400} alt="900x400" src={require("../img/title-pic-01.jpg")}/>
<Carousel.Caption>
<h3>First slide label</h3>
<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img width={900} height={400} alt="900x400" src={require("../img/title-pic-02.jpg")}/>
<Carousel.Caption>
<h3>Second slide label</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</Carousel.Caption>
</Carousel.Item>
</Carousel>*/

const HomeView = () => (

  <Grid>
    <Row className="container">
      <Image src={require("../img/homepage-pic.jpg")} responsive />
    </Row>

    <Row>
      <blockquote>
        <p>Podstawowe założenie Evernight - czyli 'zepsucie' tak fajnego i ciekawego świata inwazją obcych było,
          nie tylko dla mnie, zawodem. Pomysł grup bohaterów przyjmujących zlecenia na potwory i wszelkie zło
          w świecie hi-fantasy jest za dobry, by go marnować - od tej myśli była prosta droga do propozycji
          zrobienia kampanii w tym klimacie.</p>
          <p>Nie musiałem długo czekać na chętnych, gracze są póki co zadowoleni;
            oprócz typowego grania przewidziałem także aspekt ekonomiczny (utrzymanie i rozbudowa siedziby grupy),
            a także marketing (opłacanie bardów) i inne rzeczy, które planuję wdrażać w miarę wzrostu siły Drużyny Bohaterów.</p>
        <footer>Sir Acid, Mistrz Gry</footer>
      </blockquote>
    </Row>

  </Grid>
);

export default HomeView;