import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='header'>
            <header className='container'>
                <nav className='header-nav'>
                    {/* header logo */}
                    <h4 className='logo-nav'>Apple</h4>
                    {/* header nav links */}
                    <div className="nav-links">
                        <Link to="./">Home</Link>
                        <Link to="./Shop">Shop</Link>
                        <Link to="./Order">Order</Link>
                        <Link to="./About">About</Link>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;