import React, { useContext } from 'react';
import './Stats.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { TransactionContext } from '../context/transContext.js';


const Stats = (props) => {
    let { transactions } = useContext(TransactionContext);
    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
                income += transactions[i].amount
        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                expense += transactions[i].amount
        }
        return expense;
    }

    return (
        <div className="stats">
            <div className="title">
                <h3> Your Available Balance </h3>
                <h5>${getIncome() + getExpense()}</h5>

            </div>
            <Container>
                <Row>
                    <span className="block-example border" style={{backgroundColor: '#88D969',}}>
                        <Col ><h4>Income</h4><h5>${getIncome()}</h5></Col>
                    </span>
                    <span className="block-example border "style={{backgroundColor: '#88D969',}}>
                        <Col ><h4>Expenses</h4><h5>${getExpense()}</h5></Col>
                    </span>
                </Row>
            </Container>
        </div>
    )
}
export default Stats;