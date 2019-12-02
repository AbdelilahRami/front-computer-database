
import { Computers } from './Computers'
import React from "react";
import logo from "./logo.svg";
import {Companies} from './Companies'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './App.css';
import {AddComputer} from './AddComputer'
import { Login } from './Login'

function App() {
  return (
    <div className="App">
     <Login/>
    </div>
  );
}

export default App;
