import React from 'react';
import './Navigation.css';
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <div className="navigation">
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/admin">Admin</Link></li>
                    <li><Link to="/order">Order</Link></li>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </div>

        </div>
    );
};

export default Navigation;