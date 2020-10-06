import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './VolunterItem.css'

const Volunteritem = (props) => {
    const { title, image } = props.volunteer;
    

    return (

        <Container>
            <div className="volunteer">
                <Link to="/login">
                    <Card style={{ width: '12rem', height: '20rem' }}>
                        <Card.Img variant="top" src={image} />
                        <Card.Body>
                            <Card.Text>
                                <h5> {title}</h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
            </div>

        </Container>

    );
};

export default Volunteritem;