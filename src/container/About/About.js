import React from 'react';
import Profiles from '../../component/Profiles/Profiles';
import './About.css';

import {Router, Route, hashHistory, IndexRoute, browserHistory, applyRouterMiddleware} from 'react-router-dom';

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
import Modal from '../../component/Modals/Modal/Modal';
import Backdrop from '../../component/Backdrop/Backdrop';



class About_Us extends React.Component{
state ={
	profiles1 : [
	{ src: sohardh ,name: 'Sohardh Chobera', position: 'Design' ,id:"Id001"},
	{ src: snigdha,name: "Snigdha Bhatnagar", position: 'Web Development',id:"Id002"},
	{ src: sujay,name: "Sujay Srivastva", position: 'Project Management',id:"Id003"},
	{ src: sirish,name: "Sirish Bhudolia" , position : 'Competitive Programming',id:"Id004"}
	
	],
	profiles2: [
	{ src: shriyesh,name: "Shriyesh Chandra" ,position: 'Marketing and Publicity',id:"Id005"},
	{ src: sparsh,name: "Sparsh Tayal" ,position: 'Testing',id:"Id006"},
	{ src: sukaran,name: "Sukaran Garover",position: 'Event Management' ,id:"Id007"}
	],
  modal:[
  { src: sohardh ,name: 'Sohardh Chobera', info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam," ,ModalId:"Id001"},
  { src: snigdha,name: "Snigdha Bhatnagar", info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam,",ModalId:"Id002" },
  { src: sujay,name: "Sujay Srivastva" ,info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam,",ModalId:"Id003"},
  { src: sirish,name: "Sirish Bhudolia",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam,",ModalId:"Id004" },
  { src: shriyesh,name: "Shriyesh Chandra",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam,",ModalId:"Id005" },
  { src: sparsh,name: "Sparsh Tayal",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam,",ModalId:"Id006" },
  { src: sukaran,name: "Sukaran Grover",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam,",ModalId:"Id007" }
  
  ],
    displayModal:false

}

 showModal = (index) => {

  if(index==='Id001'){
    this.setState({displayModal:true})
  }

}
closeModal= () => {
  this.setState({displayModal:false})
}




 render(){
 	let peopleCrads1 = this.state.profiles1.map((persons,index) => {
 		return(
 			
 			<Col sm="2" key={index} >
   			<Profiles key={index} open={()=>this.showModal(persons.id)}  name = {persons.name} src = {persons.src} position ={persons.position}/>
   		</Col>

 			)
 	}
 	)
 	let peopleCrads2 = this.state.profiles2.map((persons,index) => {
 		return(
 			<Col sm="2"  key={index}>
   			<Profiles key={index} open={()=>this.showModal(persons.id)} name = {persons.name} src = {persons.src} position ={persons.position} />

   		</Col>
 			)
 	}
 	)
  return(
<div>
 <div className ="profiles">
 <Layout >
   <h1 className ="text-left mainHeading"> About Us </h1>
   
   <Container fluid>
   	<Row className="upperrow">
   		{peopleCrads1}
   	</Row>
   	<Row className="lowerrow ">
   		{peopleCrads2}
   	</Row>

    </Container>
      
    </Layout >

   </div>
     {this.state.modal.map(mod=> {
      return(<Modal openModal={this.state.displayModal} 
            key={mod.ModalId} 
            name={mod.name} 
            img={mod.src} 
            info={mod.info}/>);
    })}
    <Backdrop show={this.state.displayModal} clicked={this.closeModal} />
    </div>

  );
 }
}
export default About_Us
