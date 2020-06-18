import React from 'react';
import './Stats.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';


const Stats = (props) => {
    return(
    <div className="stats">
        <div className="title">
            <h3> Your Available Balance </h3>
            <h5>$920823</h5>
        </div>
    <Container>
     <Row>
     <span className="block-example border ">
    <Col ><h4>Income</h4><h5>$8736</h5></Col>
    </span>
    <span className="block-example border ">
    <Col ><h4>Expenses</h4><h5>$27857</h5></Col>
    </span>
     </Row>
    </Container>
   </div>
    )}
export default Stats;