import React, { useContext, useState } from 'react';
import { Button, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import fakeData from '../../fakeData/volunteer'

import './Register.css'

const Register = () => {
    console.log()
    const localData = fakeData
    const [volunteer, setVolunteer] = useState(localData)

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const handleRegisterClick = () => {

        const newRegister = {...loggedInUser };
        fetch('http://localhost:5000/addVolunteer',{

            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newRegister)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }

    return (
        <Container>
            <h2> Register naw </h2>
            <div className="register-frm">
                <form>
                    <h5>Register as a Volunter</h5>
                    <br></br>
                    <input type="text" value={loggedInUser.displayName} />
                    <br></br>
                    <br></br>
                    <input type="email" value={loggedInUser.email} />
                    <br></br>
                    <br></br>
                    <input type="date" placeholder="Date/" />
                    <br></br>
                    <br></br>
                    <textarea placeholder="Description"></textarea>
                    <br></br>
                    <br></br>
                    <input type="text" value= {`${volunteer.title}`} />
                    <br></br>
                    <br></br>
                    <button onClick={handleRegisterClick} type="submit">Submit</button>
                    <Button  variant="primary" size="lg" block>Registration </Button>
                    </form>
            </div>
        </Container>
    );
};

export default Register;