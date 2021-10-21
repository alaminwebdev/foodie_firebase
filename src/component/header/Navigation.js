import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarText
  } from 'reactstrap';

import { NavLink } from 'react-router-dom';




class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state={
            isNavOpen :false
        }
    }
    
    toggle =()=>{
        this.setState({
            isNavOpen : !this.state.isNavOpen
        });
    }

    render() {
        return (
            <Navbar  expand="md">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink to='/' exact className="nav-link" >Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/menu' exact className="nav-link" >Menu</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/about' exact className="nav-link" >About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/contact'  exact className="nav-link" >Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }

}
export default Navigation