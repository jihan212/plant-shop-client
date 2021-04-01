import React, { useContext } from 'react';
import './Login.css';
import {Form , Button } from 'react-bootstrap';
import { FaGoogle,FaFacebook } from 'react-icons/fa';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    }

const Login = () => {

    const [loggedinUser, setLoggedinUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleLogin = () => {
        
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {

            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email};
            setLoggedinUser(signedInUser);
            history.replace(from);

        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
        });
    }

    return (
        <div>
            <div className="form">
                <h4><strong>Login</strong></h4>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button onClick={handleGoogleLogin} variant="outline-dark" className="submitBtn" type="submit"> Login </Button>
            </Form>
            </div>
            <div className="buttons">
                <Button onClick={handleGoogleLogin} variant="outline-dark"> <FaGoogle /> Continue With Google </Button>
                <Button onClick={handleGoogleLogin} variant="outline-dark"> <FaFacebook /> Continue With Facebook </Button>
            </div>
        </div>
    );
};

export default Login;