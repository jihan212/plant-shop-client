import React from 'react';
import './Navigation.css';
import { Link } from "react-router-dom";
import {Navbar,Nav,Button} from 'react-bootstrap';

const Navigation = () => {
    return (
        <div>
            <div>
            <Navbar className="navigation" bg="light" variant="light">
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                <Nav.Link><Link to="/order">Order</Link></Nav.Link>
                <Nav.Link><Link to="/admin">Admin</Link></Nav.Link>
                </Nav>
                <Button variant="outline-info"><Link to="/login">Login</Link></Button>
            </Navbar>
            </div>
        </div>
    );
};

export default Navigation;