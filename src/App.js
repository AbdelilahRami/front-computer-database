import React from "react";
import logo from "./logo.svg";
import {Companies} from './Companies'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './App.css';
import {AddComputer} from './AddComputer'

function App() {
  
  return (
    <div className="App">
    <Companies/>
      <AddComputer/>
    </div>
  );
}

export default App;
