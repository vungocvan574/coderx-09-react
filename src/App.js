import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';
import { Component } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import CellItem from './components/CellItem-10-02'


class App extends Component{
  
  render() {
    return (
      <div className="App">
        <CellItem />
      </div>
    );
  }
}


export default App;