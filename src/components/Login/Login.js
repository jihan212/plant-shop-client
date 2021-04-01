import React from 'react';
import './Login.css';
import {Form , Button } from 'react-bootstrap';
import { FaGoogle,FaFacebook } from 'react-icons/fa';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    }

const Login = () => {

    const handleGoogleLogin = () => {
        
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {

            const {displayName, email} = result.user;
            const loggedinUser = {name: displayName, email}

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

                <Button variant="outline-dark" className="submitBtn" type="submit"> Login </Button>
            </Form>
            </div>
            <div className="buttons">
                <Button onClick={handleGoogleLogin} variant="outline-dark"> <FaGoogle /> Continue With Google </Button>
                <Button variant="outline-dark"> <FaFacebook /> Continue With Facebook </Button>
            </div>
        </div>
    );
};

export default Login;