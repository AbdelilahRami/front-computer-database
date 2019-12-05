import React from 'react';
import { BrowserRouter as Router , Switch , Route , Redirect } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import {Companies} from '../Company/Companies';
import {Computers} from '../Computer/Computers';
import {Login} from '../Login/Login';

export default function Header(){
    return(

 <Router>
    <div>
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/computers">Home Menu</NavbarBrand>
            <NavbarToggler  />
            <Collapse navbar>
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink href="/companies" >Companies</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/computers" >Computers</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/login">Login</NavLink>
                </NavItem>
            </Nav>
            </Collapse>
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
