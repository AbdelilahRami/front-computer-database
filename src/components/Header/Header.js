import React from 'react';
import { BrowserRouter as Router , Switch , Route , Link , Redirect } from "react-router-dom";
import {
  Navbar,
  Nav
} from 'react-bootstrap';
import {Companies} from '../Company/Companies';
import {Computers} from '../Computer/Computers';
import {Login} from '../Login/Login';
import {Footer} from '../Footer/footer';

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
           <Companies/>
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
