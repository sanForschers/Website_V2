import React from 'react';
import './profiles.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,  Row, Col, Container } from 'reactstrap';
const Profiles = (props) => {
  return(
   <div>
    <div>
     <Card body inverse style={{ backgroundColor: '#59086C', borderColor: '#59086A' }}>
        <CardImg className="profiles_cards img-responsive " top width="100%" src={props.src} alt="Card image cap" />
        <CardBody>
          <CardTitle className ="cards_title">{props.name}<p className="desgn" >President</p></CardTitle>
        </CardBody>
      </Card></div>

   </div>
  );
 }

export default Profiles ;