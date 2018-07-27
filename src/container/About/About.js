import React from 'react';
import Profiles from '../../component/Profiles/Profiles';
import './About.css';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col, Container } from 'reactstrap';
  import { Navbar, Jumbotron } from 'react-bootstrap';
import sohardh from '../../assets/sohardh.jpeg';
import snigdha from '../../assets/snigdha.png';
import sujay from '../../assets/sujayp.png';
import sirish from '../../assets/sirish.png';
import shriyesh from '../../assets/shriyesh.png';
import sparsh from '../../assets/sparsh.png';
import sukaran from '../../assets/sohardh.jpeg';




class About_Us extends React.Component{
state ={
	profiles1 : [
	{ src: sohardh ,name: 'Sohardh Chobera' },
	{ src: snigdha,name: "Snigdha Bhatnagar" },
	{ src: sujay,name: "Sujay Srivastva" },
	{ src: sirish,name: "Sirish Bhudolia" }
	
	],
	profiles2: [
	{ src: shriyesh,name: "Shriyesh Chandra" },
	{ src: sparsh,name: "Sparsh Tayal" },
	{ src: sukaran,name: "Sukaran Garover" }
	]
}



 render(){
 	let peopleCrads1 = this.state.profiles1.map(persons => {
 		return(
 			
 			<Col sm="2"  >
   			<Profiles name = {persons.name} src = {persons.src} />
   		</Col>

 			)
 	}
 	)
 	let peopleCrads2 = this.state.profiles2.map(persons => {
 		return(
 			<Col sm="2"  >
   			<Profiles name = {persons.name} src = {persons.src} />

   		</Col>
 			)
 	}
 	)
  return(

 <div className ="profiles">
   <h1 className ="text-left mainHeading"> About Us </h1>
   
   <Container fluid>
   	<Row className="upperrow">
   		{peopleCrads1}
   	</Row>
   	<Row className="lowerrow ">
   		{peopleCrads2}
   	</Row>

    </Container>
   </div>

  );
 }
}
export default About_Us
