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
  </Grid>
);





export default HomeView;