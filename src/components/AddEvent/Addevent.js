import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Addevent = () => {
    return (
        <Container>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto, registerlist">
                    <h5>Add event</h5>
                </Nav>
            </Navbar>
        </Container>
    );
};

export default Addevent;