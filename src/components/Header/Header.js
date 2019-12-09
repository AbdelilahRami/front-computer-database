import React from 'react';
import { BrowserRouter as Router , Switch , Route , Redirect } from "react-router-dom";
import {Navbar,Nav} from 'react-bootstrap';
import {Computers} from '../Computer/Computers';
import AddCompany from '../Company/AddCompany'
import Login from '../Login/Login';
import AuthenticatedRoute from './AuthenticatedRoute'

export default function Header(){
    return(

 <Router>
    <div>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/computers">Home Menu</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/companies"> Companies</Nav.Link>
                <Nav.Link href="/computers">Computers</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
        </Navbar>
    </div>
    <Switch>
      <Route path="/companies">
           <AuthenticatedRoute/>
      </Route>
      <Route path="/computers/addCompanie">
           <AddCompany/>
      </Route>
      <Route path="/computers">
           <Computers/>
      </Route>
      <Route path="/login">
          <Login/>
      </Route>
      <Redirect exact from="/**" to="computers" />
    </Switch>
     </Router> 
  );
}
