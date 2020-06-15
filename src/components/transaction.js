import React from 'react';
import './Stats.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';


const Stats = (props) => {
    return(
    <div className="body">
    <h3> Create Transaction </h3>
    <h6>Details</h6>
    <Container>
     <Row>
    <Col md={6}><h4>Button +</h4></Col>
    <Col md={6}><h4>Button -</h4></Col>
     </Row>
    </Container>
   </div>
    )}
export default Stats;