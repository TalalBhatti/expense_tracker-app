import React from 'react';
import Header from './components/Header.js';
import Stats from './components/Stats.js';
import History from './components/history.js';
import Transactions from './components/transaction.js';
import './App.css';

function App() {
  return (
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
  );
}

export default App;
