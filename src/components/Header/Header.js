import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import images from '../../fakeData/logos/Group 1329.png'
const Header = () => {
    return (
        <Container>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home"> <img style={{width:"100px"}} src={images} alt="logo"/> </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Donation</Nav.Link>
                    <Nav.Link href="#addevent">Events</Nav.Link>
                    <Nav.Link href="#pricing">Blog</Nav.Link>

                </Nav>
                <Form inline>
                    <Link to="/register"><Button style={{ marginRight: "3px" }} variant="primary">Register</Button></Link>
                    
                    <Link to="/registerlist"><Button variant="dark">Admin</Button></Link>
                </Form>
            </Navbar>
            <div  >
                <h3  className="text-center">I GROW BY HELPING PEOPLE IN NEED</h3>
                <Form inline className="search-area">
                    <FormControl type="text" placeholder="Search" className=" mr-sm-1" />
                  <Button type="search">Search</Button>
                </Form>

            </div>
        </Container>
    );
};

export default Header;