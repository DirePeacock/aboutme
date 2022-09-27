import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Navbar = () => {
    const guestLinks = (
        <ul>
            <li>
                <Link to="/">
                    <Button className="btn btn-primary createNew">Create New</Button>
                </Link>
            </li>
            <li>
                <Link to="/about">
                    <Button className="btn btn-danger signOut">Sign out</Button>
                </Link>
            </li>
        </ul>
    );
    return (
        <nav className="navbar">
            navbar

        </nav>
    );
};

export default Navbar;
