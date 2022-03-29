import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">Logo</a>
            </div>
            <ul className="links">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Shop'>Shop</Link></li>
                <li><Link to='/About'>About</Link></li>
            </ul>

        </nav>
    );
};

export default Navbar;