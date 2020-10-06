import React, { useContext, useEffect, useState } from 'react';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { UserContext } from '../../App';
import fakeData from '../../fakeData/volunteer'
const SelectedVolinteer = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [lodeData, setLodeData] = useState({})
    
  console.log(lodeData)
    useEffect(() => {
        fetch('http://localhost:5000/addVolunteerData')
            .then(res => res.json())
            .then(data => setLodeData(data))
            
    },[])

    const addVolunteer = () => {
        fetch('http://localhost:5000/addVolunteerData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fakeData)
        })
    }

    return (
        <Container>
            <div>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#features">Donation</Nav.Link>
                        <Nav.Link href="#pricing">Events</Nav.Link>
                        <Nav.Link href="#pricing">Blog</Nav.Link>

                    </Nav>
                    <Form inline>
                        <h5>{loggedInUser.displayName}</h5>
                    </Form>
                </Navbar>
                <button onClick={addVolunteer}> See Volunteer </button>
            </div>
           


        </Container>
    );
};

export default SelectedVolinteer;