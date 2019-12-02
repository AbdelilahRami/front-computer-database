import React from 'react';
import './App.css';
import  Header  from './Header';
import React from "react";
import logo from "./logo.svg";
import {Companies} from './Companies'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Header/>
    <Companies/>
    </div>
  );
}
export default App;
