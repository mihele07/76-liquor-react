import React, { Component } from "react";
import '../header-footer.css'
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        
        <Jumbotron fluid>
          <div className="container">
            <div className="row">
              <div className="col">
              </div>
            </div>
          </div>
        </Jumbotron>
        <p className="adress">1473 1st Avenue, New York, NY 10021 | 212-249-1700</p>
        <Navbar dark sticky="top" expand="md">
          <div className="container">
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="/assets/images/logo.png"
                height="30"
                width="30 "
                alt="76 Logo"
              />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <i className="fa fa-home fa-lg" /> Home
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="nav-link" to="/ourstory">
                    <i className="fa fa-info fa-lg" /> Our Story
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="nav-link" to="/products">
                    <i className="fa fa-list fa-lg" /> Products
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <i className="fa fa-address-card fa-lg" /> Contact Us
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        
      </React.Fragment>
      
    );
  }
}

export default Header;
