import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
class Header extends Component {
    render() {
        return (
            <header className="myHeader">

                <Navbar bg="dark" variant="dark" expand="lg" fixed="top" id="navbar">
                    <Container>
                        <Navbar.Brand href="/" id="logo"><img src={"./post/logo.svg"} height="40" alt="Logo" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <React.Fragment>
                                    <NavLink exact activeClassName="active" className="nav-link" to="/">Shadow Generator</NavLink>
                                    <NavLink activeClassName="active" className="nav-link" to="/border-radius">Border Radius</NavLink>
                                    <NavLink activeClassName="active" className="nav-link" to="/gradient-generator">Gradient Generator</NavLink>
                                </React.Fragment>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header >
        )
    }
}
export default Header;
