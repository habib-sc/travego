import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {

    const [user, loading, error] = useAuthState(auth);
    
    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <div>
            <Navbar className='tg-navbar text-white' collapseOnSelect expand="lg" bg="header-bg" variant="dark">
                <Container className='tg-navbar-container rounded-3 mt-2'>
                    <Navbar.Brand className='fw-bold'>TRAVEGO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className='text-uppercase d-flex align-items-center'>
                            <li className="nav-item">
                                <Link className='nav-link text-white' to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link text-white' to='/blog'>Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link text-white' to='/about'>About Me</Link>
                            </li>
                            {!user &&
                            <li className="nav-item">
                                <Link className='nav-link text-white' to='/login'>Login</Link>
                            </li>
                            }
                            <li className="nav-item">
                                {user?
                                    <Link className='nav-link text-white' to='/'><button onClick={handleSignOut} className='btn btn btn-link rounded-pill text-uppercase text-white'>Logout</button></Link>
                                    :
                                    <Link className='nav-link text-white' to='/register'><button className='btn btn btn-primary rounded-pill text-uppercase'>Sign Up</button></Link>
                                }
                            </li>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;