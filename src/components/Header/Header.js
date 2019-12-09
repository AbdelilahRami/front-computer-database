import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import {
  Navbar,
  Nav
} from 'react-bootstrap';
import { Computers } from '../Computer/Computers';
import AddCompany from '../Company/Add-company/AddCompany'
import Login from '../Login/Login';
import AuthenticatedRoute from './AuthenticatedRoute'
import './myheader.css'

export default function Header() {
  return (
    <Router>
      <header id="header">
        <Navbar bg="info" variant="dark" style={{ position: 'sticky' }}>
          <Navbar.Brand href="/computers">Home Menu</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/computers">Computers</Nav.Link>
            <Nav.Link href="/companies"> Companies</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar>
      </header>
      <br />
      <Switch>
        <Route path="/companies">
          <AuthenticatedRoute />
        </Route>
        <Route path="/computers/addCompanie">
          <AddCompany />
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
