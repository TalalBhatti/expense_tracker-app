import React, { useState } from 'react';
import Header from './components/Header.js';
import Stats from './components/Stats.js';
import History from './components/history.js';
import Transactions from './components/transaction.js';
import './App.css';
import {TransactionProvider} from './context/transContext.js'

function App() {
  return (
    <TransactionProvider>
    <div className=".container, .container-sm, .container-md, .container-lg">
      <div className="main">
        <Header></Header>
        <div className="App">
        <Stats />   
        <History />
        <Transactions /> 
        </div>
        </div>
      </div>
      </TransactionProvider>
  );
}

export default App;
