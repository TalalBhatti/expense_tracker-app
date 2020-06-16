import React from 'react';
import './transaction.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,Form,Button} from 'react-bootstrap';


const Stats = (props) => {
    return(
    <div className="transaction">
    <h3> Create Transaction </h3>
    <div className="amount">
    <Form.Group>
    <h6>Amount desciption</h6>
      <Form.Control size="sm" type="text" placeholder="Transaction Description" />
    </Form.Group>
    </div>
    <div className="amount">
    <h6>Amount</h6>
    <input className="numbers" type="number" placeholder="Amount" id="quantity" name="quantity" min="1" max="999999999999999999"></input>
    </div>
   
     <div className="buttons">   
    <Container>
     <Row>
    <Col md={6}><Button variant="secondary" size="sm" block>ADD +</Button>{' '}</Col>
    <Col md={6}><Button variant="secondary" size="sm" block>ADD -</Button>{' '}</Col>
     </Row>
    </Container>
    </div>
    </div>
    )}
export default Stats;