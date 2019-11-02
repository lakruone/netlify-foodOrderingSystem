import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavbarBrand, Navbar, NavbarNav, NavItem, NavLink,MDBPopoverBody, Collapse,MDBPopover,MDBPopoverHeader,  Fa, Dropdown, DropdownMenu, DropdownItem, DropdownToggle,Button } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
//import Logout from './Logout';

//import {NavBar, Nav, NavItem} from 'react-bootstrap';
//import './Navbar.css';

class Navbar1 extends Component {

    constructor() {
        super();
        this.state = {

            data:null
        }

    }


    // componentDidMount(){
    //     const token= localStorage.getItem('token');
    //     fetch('http://localhost:5000/employee/profile'  ,{
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "authorization": "bearer "+ token
    //           }

    //       })
    //       .then(response => {
    //         return response.json();
    //       })
    //       .then((data)=> {
    //         console.log(data);
    //         this.setState({

    //             customerName: data.customerName
    //         });
    //         console.log(this.state.customerName)
    //       })


    //  }
   
    logout() {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('token');
        console.log(localStorage.token)
    }
    
    render() {
    const decode = jwt_decode(localStorage.token);        
      //console.log(decode);

      
        return(
            <div>
                <Router>
                    <Navbar color="blue-grey" dark expand="lg" scrolling fixed="top">
                        <NavbarBrand >
                           <a href="/adminhome"> <strong style={{color:"white"}}>Home</strong></a>
                        </NavbarBrand>
                        {/* !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />*/}
                        <Collapse navbar>
                           
                            <NavbarNav right>
                            <NavItem>
                                <h5 style={{color:"white", marginTop:"7px"}}>{this.state.customerName}</h5>

                            </NavItem>
                            <NavItem>
                                <Dropdown >
                                    <DropdownToggle nav caret> <div className="d-none d-md-inline">Profile</div></DropdownToggle>
                                    <DropdownMenu right>
                                    {/* <DropdownItem href={"yourprofile/"+ decode.userData[0].empID} > Your Profile</DropdownItem>
                                    <DropdownItem href={"editprofile/"+ decode.userData[0].empID}> Edit Profile</DropdownItem> */}
                                    <DropdownItem href="/yourprofile"> Your Profile</DropdownItem>
                                    <DropdownItem href="/editprofile" > Edit Profile</DropdownItem>
                                    <DropdownItem href="/login" onClick={ this.logout.bind(this) }> Log out</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
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

