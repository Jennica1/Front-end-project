import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <nav>
                <ul className="footer-list">
                    <li className="footer-item"><Link to="/privacy">Privacy Policy</Link></li>
                    <li className="footer-item"><Link to="/terms">Terms of Service</Link></li>
                    <li className="footer-item"><Link to="/contact">Contact Us</Link></li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;
