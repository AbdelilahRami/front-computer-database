import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import {
  Navbar,
  Nav,Button,Form
} from 'react-bootstrap';
import { Computers } from '../Computer/Computers';
import Login from '../Login/Login';
import AuthenticatedRoute from './AuthenticatedRoute'
import './myheader.css'
import AuthenticationService from '../Login/AuthenticationService'
import AddComputer from '../Computer/Add-computer/AddComputer';

export default function Header() {

  function logout(){
    AuthenticationService.logout()
  }

  return (
    <Router>
      <header id="header"style={{cursor:'pointer'}}>
        <Navbar bg="info" variant="dark" style={{ position: 'sticky' }}>
          <Navbar.Brand href="/computers">Home</Navbar.Brand>
          <Nav variant="white" className="mr-auto">
            <Nav.Link href="/computers">Computers</Nav.Link>
            <Nav.Link href="/companies"> Companies</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
          {
            AuthenticationService.isUserLoggedIn()?
            <Form inline>
               <Button style={{ color: 'white', backgroundColor: 'gray', borderColor:'gray',height:'50px'}} onClick={()=>logout()}>Logout</Button>
            </Form>
          :
          <></>
          }
          </Navbar>
      </header>
      <br />
      <Switch>
        <Route path="/companies">
          <AuthenticatedRoute />
        </Route>
        <Route path="/computers/addComputer">
          <AddComputer />
        </Route>
        <Route path="/computers">
          <Computers />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Redirect exact from="/**" to="computers" />
      </Switch>
    </Router>
  );

  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("header").style.fontSize = "30px";
    } else {
      document.getElementById("header").style.fontSize = "90px";
    }
    window.onscroll = function () { scrollFunction() };
  }
}
