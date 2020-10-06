import React, { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from './firebase.config';
import './Login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';


const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const history = useHistory();
    const location = useLocation();
   const { from } = location.state || { from: { pathname: "/" } };



    const googleSignIn = () => {

        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // The signed-in user info.
            // const  user = result.user;
            const { displayName, email } = result.user
            const signInUserInfo = { displayName, email }
            setLoggedInUser(signInUserInfo);
            history.replace(from);
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });

    }

    return (
        <Container>
            <h5 style={{ textAlign: 'center' }}> User Name: {loggedInUser.displayName} </h5>
            <div className="login-container">

                <div className="frm-fild">
                    <h4>Login With</h4>
                    <br></br>
                    <Button onClick={googleSignIn}>Continue with Google</Button>
                    <p>Don't have an account?<Link>Create an account</Link> </p>

                </div>
            </div>

        </Container>
    );
};

export default Login;