import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavbarBrand, Navbar, NavbarNav, NavItem, NavLink, Collapse, Fa, Dropdown, DropdownMenu, DropdownItem, DropdownToggle,Button } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
//import AuthService from '../../src/Auth/AuthService';


//import Logout from './Logout';

//import {NavBar, Nav, NavItem} from 'react-bootstrap';
//import './Navbar.css';

class Navbar1 extends Component {
   
    
    
    render() {
        
      
        return(
            <div>
                <Router>
                    <Navbar color="blue-grey darken-4" dark expand="lg" scrolling fixed="top">
                        <NavbarBrand href="/">
                            <strong>Creative Spark</strong>
                        </NavbarBrand>
                        {/* !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />*/}
                        <Collapse navbar>
                            <NavbarNav left>
                            <NavItem >
                                {/* <Link className="nav-link" to="/login">Login</Link> */}
                                <a href="/" className="nav-link" ><Fa icon="home" fixed/>Home</a>
                            </NavItem>
                            <NavItem>
                            <a href="#aboutus" className="nav-link" >About Us</a>
                            </NavItem>
                            </NavbarNav>

                            <NavbarNav right>
                            {/* <NavItem>
                                <NavLink className="nav-link" to="#">Contact Us</NavLink>
                            </NavItem> */}
                            {/* <NavItem>
                                <NavLink to="#"><Fa icon="facebook" /></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="#"><Fa icon="twitter" /></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="#"><Fa icon="instagram" /></NavLink>
                            </NavItem> */}
                            <NavItem >
                                {/* <Link className="nav-link" to="/login">Login</Link> */}
                                <a href="/login"  className="nav-link" >Sign In</a>
                            </NavItem>
                    
                            </NavbarNav>

                        </Collapse>
                    </Navbar>
                </Router>
                <br/>
                <br/>
                <br/>
            </div>
        

        )
      }
}
export default Navbar1;//wrap the component


 