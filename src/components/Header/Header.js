import React from 'react';
import { Container, Form, Nav, Navbar, Button } from 'react-bootstrap';
import './Header.css';
import logo from '../../images/logo.svg'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/"><img src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Features</Nav.Link>
                    <Nav.Link href="/">Pricing</Nav.Link>
                    <Nav.Link href="/">Resources</Nav.Link>
                </Nav>
                <Form className="d-flex flex-column flex-lg-row">
                    <Nav>
                        <Nav.Link href="/">Login</Nav.Link>
                    </Nav>
                    <Button variant="success">Sing Up</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;