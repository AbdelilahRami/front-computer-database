
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Navbar, Nav,Button,Form } from 'react-bootstrap';
import { Computers } from '../Computer/Computers';
import Login from '../Login/Login';
import AuthenticatedRoute from './AuthenticatedRoute'
import './myheader.css'
import AuthenticationService from '../Login/AuthenticationService'
import AddComputer from '../Computer/Add-computer/AddComputer';

export default function Header() {

  const [isLog,setIslog] = useState(false)
  function logout(){
    AuthenticationService.logout()
    setIslog(false)
  }

  return (
    <Router>
      <header id="header"style={{cursor:'pointer'}}>
        <Navbar bg="info" variant="dark" style={{ position: 'sticky' }}>
          <Navbar.Brand href="/computers">Home</Navbar.Brand>
          <Nav variant="white" className="mr-auto">
            <Nav.Link href="/computers">Computers</Nav.Link>
            <Nav.Link href="/companies"> Companies</Nav.Link>
            {!isLog?<Nav.Link href="/login">Login</Nav.Link>:<></>}
          </Nav>
          {
            isLog?
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
          <Login log={setIslog}/>
        </Route>
        <Redirect exact from="/**" to="computers" />
      </Switch>
    </Router>
  );
}
