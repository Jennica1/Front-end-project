import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
            <Link to="/">
                <img src="./images/logo.png" alt="Logo" className="logo" /> 
            </Link>
                <nav>
                    <ul className="nav-list">
                        <li className="nav-item"><Link to="/account">Account</Link></li>
                        <li className="nav-item"><Link to="/settings">Settings</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
