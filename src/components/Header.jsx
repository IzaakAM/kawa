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
    borderBottom: '2px solid transparent',
    ':hover': {
        borderBottom: `2px solid ${THEME.onContainer}`,
    },
};

function Header() {
    return (
        <header style={{ backgroundColor: THEME.primary, padding: '1rem', color: THEME.onContainer }}>
            {/* Logo ou titre du site */}
            <h1 style={{ fontSize: '1.875rem', fontFamily: FONTS.title, marginBottom: '1rem' }}>
                Kawa INSA Hauts-de-France
            </h1>

            <nav style={{ display: 'inline-block', float: 'right' }}>
                <ul style={{ display: 'flex', gap: '1rem' }}>
                    <li><Link to="/" style={navLinkStyle}>Accueil</Link></li>
                    <li><Link to="/carte" style={navLinkStyle}>Carte</Link></li>
                    <li><Link to="/contact" style={navLinkStyle}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
