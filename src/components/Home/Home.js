import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import fakeData from '../../fakeData/volunteer'
import Header from '../Header/Header';
import Volunteritem from '../VolunterItem/Volunteritem';

const Home = () => {

    const localData = fakeData
    const [volunteer, setVolunteer] = useState(localData)

    return (

        <>

            <Header></Header>
            <Container>

                {
                    volunteer.map(volunteer => <Volunteritem volunteer={volunteer}></Volunteritem>)
                }

            </Container>
        </>

    );
};

export default Home;