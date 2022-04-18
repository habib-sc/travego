import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {

    const [user, loading, error] = useAuthState(auth);
    
    const handleSignOut = () => {
        signOut(auth);
    }

    function CustomLink({ children, to, ...props }: LinkProps) {
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });
      
        return (
            <Link
                style={{ color: match ? "#F3F8FF" : "" }}
                className={`nav-link ${match? 'border rounded-3 shadow-lg' : 'text-white'}`}
                to={to}
                {...props}
            >
                {children}
            </Link>
        );
      }

    return (
        <div>
            <Navbar className='tg-navbar text-white' collapseOnSelect expand="lg" bg="header-bg" variant="dark">
                <Container className='tg-navbar-container rounded-3 mt-2 fixed-top'>
                    <Navbar.Brand className='fw-bold'>
                        <Link to='/' className='text-decoration-none text-white'>TRAVEGO</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className='text-uppercase d-flex align-items-center'>
                            <li className="nav-item">
                                <CustomLink to='/'>Home</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink to='/blog'>Blog</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink to='/about'>About Me</CustomLink>
                            </li>
                            {!user &&
                            <li className="nav-item">
                                <CustomLink to='/login'>Login</CustomLink>
                            </li>
                            }
                            <li className="nav-item">
                                {user?
                                    <CustomLink to='/'><button onClick={handleSignOut} className='btn btn btn-link rounded-pill text-uppercase text-white'>Logout</button></CustomLink>
                                    :
                                    <CustomLink to='/register'><button className='btn btn btn-primary rounded-pill text-uppercase'>Sign Up</button></CustomLink>
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