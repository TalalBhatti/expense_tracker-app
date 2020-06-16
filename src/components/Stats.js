import React from 'react';
import './Stats.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';


const Stats = (props) => {
    return(
    <div className="stats">
    <h3> Your Available Balance </h3>
    <h6>$920823</h6>
    <Container>
     <Row>
    <Col ><h4>Expenses</h4><h4>$8736</h4></Col>
    <Col ><h4>Balance</h4><h4>$27857</h4></Col>
     </Row>
    </Container>
   </div>
    )}
export default Stats;