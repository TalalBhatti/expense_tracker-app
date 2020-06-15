import React from 'react';
import Header from './components/Header.js';
import Stats from './components/Stats.js';
import History from './components/history.js';
import Transactions from './components/transaction.js';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Stats />   
        <History />
        <Transactions /> 
      </div>
  );
}

export default App;
