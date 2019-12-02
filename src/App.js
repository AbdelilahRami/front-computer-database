
import { Computers } from './Computers'
import React from "react";
import {Footer} from './Footer'
import './App.css';
import {AddComputer} from './AddComputer'
import { Login } from './Login'


function App() {
  return (
    <div className="App">
     <Login/>
        <Computers/>
      <Footer/>
    </div>
  );
}

export default App;
