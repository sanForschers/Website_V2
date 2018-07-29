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
import sukaran from '../../assets/sukaran.png';
import Layout from '../../component/Layout/Layout';



class About_Us extends React.Component{
state ={
	profiles1 : [
	{ src: sohardh ,name: 'Sohardh Chobera', position: 'Design'},
	{ src: snigdha,name: "Snigdha Bhatnagar", position: 'Web Development'},
	{ src: sujay,name: "Sujay Srivastva", position: 'Project Management'},
	{ src: sirish,name: "Sirish Bhudolia" , position : 'Competitive Programming'}
	
	],
	profiles2: [
	{ src: shriyesh,name: "Shriyesh Chandra" ,position: 'Marketing and Publicity'},
	{ src: sparsh,name: "Sparsh Tayal" ,position: 'Testing'},
	{ src: sukaran,name: "Sukaran Garover",position: 'Event Management' }
	]
}



 render(){
 	let peopleCrads1 = this.state.profiles1.map(persons => {
 		return(
 			
 			<Col sm="2"  >
   			<Profiles name = {persons.name} src = {persons.src} position ={persons.position}/>
   		</Col>

 			)
 	}
 	)
 	let peopleCrads2 = this.state.profiles2.map(persons => {
 		return(
 			<Col sm="2"  >
   			<Profiles name = {persons.name} src = {persons.src} position ={persons.position} />

   		</Col>
 			)
 	}
 	)
  return(

 <div className ="profiles">
 <Layout />
   <h1 className ="text-left mainHeading"> About Us </h1>
   
   <Container fluid>
   	<Row className="upperrow">
   		{peopleCrads1}
   	</Row>
   	<Row className="lowerrow ">
   		{peopleCrads2}
   	</Row>

    </Container>
    <Layout />
   </div>

  );
 }
}
export default About_Us
