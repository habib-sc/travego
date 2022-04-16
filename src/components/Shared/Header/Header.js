import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar className='tg-navbar text-white' collapseOnSelect expand="lg" bg="header-bg" variant="dark">
                <Container className='tg-navbar-container rounded-3 mt-2'>
                    <Navbar.Brand className='fw-bold'>TRAVEGO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className='text-uppercase'>
                            <Nav.Link className='text-white' href="#deets">Home</Nav.Link>
                            <Nav.Link className='text-white' href="#memes">
                                About
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;