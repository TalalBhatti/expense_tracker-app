import React, { useContext } from 'react';
import './history.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TransactionContext } from '../context/transContext.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const History = (props) => {
    let { transactions } = useContext(TransactionContext);
    let { deleteTransaction } = useContext(TransactionContext);
    console.log(transactions)
    return (
        <div className="history">
            <h3> History </h3>
            <Container>
            <ul>
            
                {transactions.map((transObj, id) => {
                    return (<li key={id}>
                        <Row>
                          <Col xs={{ span: 1, offset: 1 }}><button className="delete" onClick={() => deleteTransaction(transactions.id)}>Del</button></Col>
                            <Col className="transition-list">
                            <span > {transObj.desc}</span>
                            <span>{transObj.amount}</span>
                            </Col>
                            </Row>
                           
            </li>
            )
            
        })}
    
    
    </ul>
    </Container>
   </div>
    )}
export default History;