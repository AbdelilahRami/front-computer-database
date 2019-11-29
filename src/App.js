import React from "react";
import logo from "./logo.svg";
import {Companies} from './Companies'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
    <Companies/>
    </div>
  );
}

export default App;
