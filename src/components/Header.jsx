// src/components/Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { LIGHT_MODE, DARK_MODE, FONTS } from '../assets/styles/constants.jsx';

// Exemple de sélection de mode (vous pouvez le définir dynamiquement)
const isDarkMode = false;
const THEME = isDarkMode ? DARK_MODE : LIGHT_MODE;

// Style commun pour les liens de navigation
const navLinkStyle = {
    color: THEME.onContainer,
    textDecoration: 'none',
    border: '6px solid transparent',
};

function Header() {
    return (
        <header style={{ backgroundColor: THEME.primary, padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

            <h1 style={{ fontSize: '1.875rem', color: THEME.onContainer }}>
                Kawa INSA Hauts-de-France
            </h1>

            <nav>
                <ul style={{ display: 'flex', gap: '1rem', paddingRight: '1rem' }}>
                    <li><Link to="/" style={navLinkStyle}> Accueil </Link></li>
                    <li><Link to="/carte" style={navLinkStyle}> Carte </Link></li>
                    <li><Link to="/contact" style={navLinkStyle}> Contact </Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
