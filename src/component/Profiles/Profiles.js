import React from 'react';
import './profiles.css';

import { Card, CardImg, CardBody,
  CardTitle} from 'reactstrap';
const Profiles = (props) => {
  return(
   <div>
    <div>
     <Card body inverse style={{ backgroundColor: '#59086C', borderColor: '#59086A' }} className='cards'>
        <CardImg className="profiles_cards img-responsive " top width="100%" src={props.src} alt="Card image cap" />
        <CardBody>
          <CardTitle className ="cards_title">{props.name}<p className="desgn" >Vice President<br/><p className="pos">{props.position}</p></p></CardTitle>
        </CardBody>
      </Card></div>

   </div>
  );
 }

export default Profiles ;