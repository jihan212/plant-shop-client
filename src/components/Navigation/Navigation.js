import React from 'react';
import './Navigation.css';
import { Link } from "react-router-dom";
import {Navbar,Nav} from 'react-bootstrap';

const Navigation = () => {
    return (
        <div>
            <div>
            <Navbar className="navigation" bg="light" variant="light">
                <Navbar.Brand href="/">Green Point</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                <Nav.Link><Link to="/order">Order</Link></Nav.Link>
                <Nav.Link><Link to="/admin">Admin</Link></Nav.Link>
                </Nav>
                <Nav.Link><Link to="/login">Login</Link></Nav.Link>
            </Navbar>
            </div>
        </div>
    );
};

export default Navigation;