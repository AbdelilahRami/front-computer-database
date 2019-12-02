import React from 'react';
import { BrowserRouter as Router , Switch , Route , Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import {Companies} from './Companies';
import {Computers} from './Computers';
import {Login} from './Login';
import {Footer} from './Footer';
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
           <Footer/>
      </Route>
      <Route path="/login">
          <Login/>
      </Route>
    </Switch>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {/* <Switch>
        <Route path="/recipes">
            <Recipes/>
        </Route>
        <Route path="/ingredrecip">
            <Recipes/>
            <Ingredients/>
        </Route>
        <Route path="/ingredients">
            <Ingredients/>
        </Route>
        </Switch>*/}
     </Router> 
  );
}
