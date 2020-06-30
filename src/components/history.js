import React, { useContext } from 'react';
import './history.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {TransactionContext} from '../context/transContext.js';

const History = (props) => {
    let {transactions} = useContext(TransactionContext);
    let {deleteTransaction} = useContext(TransactionContext);
    console.log(transactions)
    return(
    <div className="history">
    <h3> History </h3>
    <ul className="transition-list">
        {transactions.map((transObj, id)=>{
            return(<li key={id}>
                <span>{transObj.desc}</span>
                <span>{transObj.amount}</span>
                <button onClick= {() => deleteTransaction(transactions.id)}>x</button>
            </li>
            )
        })}
    </ul>
   </div>
    )}
export default History;