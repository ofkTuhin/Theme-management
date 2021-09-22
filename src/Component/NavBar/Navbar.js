import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="logo"><h2>CRUD</h2></div>
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to="/getData"><li>Data</li></Link>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;