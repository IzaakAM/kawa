// src/components/Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/customHover.css';
import { LIGHT_MODE, DARK_MODE } from '../assets/styles/constants.jsx';

const isDarkMode = false;
const THEME = isDarkMode ? DARK_MODE : LIGHT_MODE;

const navLinkStyle = {
    color: THEME.onContainer,
    textDecoration: 'none',
    border: '6px solid transparent',
};

function Header() {
    return (
        <header style={{ backgroundColor: THEME.primary, padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

            <div style={{ display: "flex", alignItems: "center" }}>
                <img
                    src="/logo.png"
                    alt="Logo Kawa"
                    style={{ marginRight: "1rem", height: "50px", backgroundColor: THEME.background, padding: '0.1rem', borderRadius: "10px" }}
                />
                <h1 style={{ fontSize: "1.875rem", color: THEME.onContainer }}>
                    Kawa INSA Hauts-de-France
                </h1>
            </div>

            <nav>
                <ul style={{ display: 'flex', gap: '1rem', paddingRight: '1rem' }}>
                    <li><Link to="/" style={navLinkStyle} className="link-hover-override"> Accueil </Link></li>
                    <li><Link to="/carte" style={navLinkStyle} className="link-hover-override"> Carte </Link></li>
                    <li><Link to="/contact" style={navLinkStyle} className="link-hover-override"> Contact </Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
