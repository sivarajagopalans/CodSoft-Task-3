import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export const NavbarComponent = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="bg-transparent text-light">
                <Container>
                    <Navbar.Brand><Link to='/' className='text-decoration-none h3 text-light'>Blog Platform</Link></Navbar.Brand>
                    <Navbar.Toggle style={{background:"#DFD6"}} aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                        <Nav className='d-flex w-25 justify-content-around'>
                            <Link to='/' className='h5 text-decoration-none'>Home</Link>
                            <Link to='/all-posts' className='h5 text-decoration-none'>
                                All Posts
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
