import React from 'react';
import logo from '../../../logo1.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {FaBell, FaBinoculars, FaHome, FaTools} from 'react-icons/fa'

const NavBar = () => {
    return (
        <Navbar className='bg-nav-gray shadow py-3 position-sticky top-0' expand="lg">
            <Container fluid className='px-4 mx-5'>
                <Navbar.Brand href="#">
                    <img src={logo} style={{width: '288px'}} className="App-logo" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" >
                    <Nav
                        className="ms-auto my-2 my-lg-0 gap-2 flex-row"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className='border d-flex align-items-center justify-content-center rounded-circle h-auto text-center text-white bg-primary-light' href="#action1"><FaHome className='mx-1' /></Nav.Link>
                        <Nav.Link className='border d-flex align-items-center justify-content-center rounded-circle h-auto text-center text-white bg-primary-light' href="#action2"><FaBinoculars className='mx-1' /></Nav.Link>
                        <Nav.Link className='border d-flex align-items-center justify-content-center rounded-circle h-auto text-center text-white bg-primary-light' href="#action3"><FaTools className='mx-1' /></Nav.Link>
                        <Nav.Link className='border d-flex align-items-center justify-content-center rounded-circle h-auto text-center text-white bg-primary-light' href="#action4"><FaBell className='mx-1' /></Nav.Link>
                        <NavDropdown drop='start' title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;