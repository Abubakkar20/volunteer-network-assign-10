import React, { useContext } from 'react';
import { Col, Container, Nav, Navbar, Row, Table } from 'react-bootstrap';
import images from '../../../fakeData/logos/Group 1329.png'
import { UserContext } from '../../../App';
import './RegisterList.css'
const Registerlist = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log(loggedInUser)
    return (
        <Container>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home"> <img style={{ width: "120px" }} src={images} alt="logo" /> </Navbar.Brand>
                <Nav className="mr-auto, registerlist">
                    <h5>Volunter Registerlist</h5>
                </Nav>
            </Navbar>



            <Row>
                <div >
                    <Col sm={2}>
                        <div className="add-event">
                        <p>volunter register list</p>
                        <h6>Add event</h6>
                        </div>
                    </Col>
                </div>
                <Col sm={10}>

                    <div className="admin-data">
                        <Table responsive="sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email ID</th>
                                    <th>Registration date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>{loggedInUser.displayName}</td>
                                    <td>{loggedInUser.email}</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>

                                </tr>
                            </tbody>
                        </Table>
                    </div>

                </Col>
            </Row>


        </Container>
    );
};

export default Registerlist;