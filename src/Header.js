import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export default function Header(){
    return(

 <Router>
    <div>
        <Navbar color="light" light expand="md">
            <NavbarBrand>Home Menu</NavbarBrand>
            <NavbarToggler  />
            <Collapse navbar>
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink >Companies</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink >Computers</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink >Login</NavLink>
                </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
    </div>

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
