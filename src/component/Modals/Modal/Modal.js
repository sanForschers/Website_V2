import React from 'react';
import {  Row, Col, Container } from 'reactstrap';
import './Modal.css';

const modal = (props) => {
	return(
		

		<div className="mod" 
		style={{display:props.openModal ? 'block': 'none'}}>
		<Row>
		<Col sm={4}>
		<img className="images" src={props.img}/><br/><br/>
		<h2>{props.name}</h2>
		</Col>
		<Col sm={8}>
		<p>{props.info}</p>
		</Col>
		</Row>
		

		</div>
);
}
export default modal;