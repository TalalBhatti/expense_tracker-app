import React, { useState, useContext } from 'react';
import './transaction.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { TransactionContext } from '../context/transContext.js'



const Transaction = (props) => {
  let { addTransaction } = useContext(TransactionContext);
  let [newDesc, setDesc] = useState("");
  let [newAmount, setAmount] = useState(0);
  const handleAdditon = (event) => {
    event.preventDefault();
    console.log(newDesc, newAmount);
    addTransaction({
      id: Math.floor(Math.random() * 10),
      amount: Number(newAmount),
      desc: newDesc,
    })
  }
  return (
    <div className="transaction">
      <h3> Create Transaction </h3>
      <form className="trans-form" onSubmit={handleAdditon}>
        <div className="amount">
          <h6>Amount desciption</h6>
          <input className="numbers" onChange={(ev) => setDesc(ev.target.value)} placeholder="Maggie" ></input>
        </div>
        <div className="amount">
          <h6>Amount</h6>
          <input className="numbers" onChange={(ev) => setAmount(ev.target.value)} type="number" placeholder="2$" id="quantity" name="quantity" ></input>
        </div>

        <div className="buttons">
          <Button type="submit" value="Add Transaction" variant="secondary" size="sm" block>Preceed</Button>
        </div>
      </form>
    </div>
  )
}
export default Transaction;