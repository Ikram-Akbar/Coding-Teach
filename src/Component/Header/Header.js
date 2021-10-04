import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div>
            <Navbar className="shadow" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">CODERS ZONE</Navbar.Brand>
                    <Nav className="me-auto custom-style-navLink">
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/service">Service</NavLink>
                        <NavLink to="/about">About Us</NavLink>
                    
                        <NavLink to="/blog">Blog</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;