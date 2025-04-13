import React from 'react';
import { LIGHT_MODE, DARK_MODE } from '../assets/styles/constants.jsx';
const isDarkMode = false;
const THEME = isDarkMode ? DARK_MODE : LIGHT_MODE;

import '../assets/styles/customHover.css';

/**
 * Composant bouton animé réutilisable avec effet de survol
 * @param {string} text - Texte à afficher dans le bouton
 * @param {function} onClick - Fonction à exécuter lors du clic
 * @param {object} props - Propriétés additionnelles à passer au bouton
 * @returns {JSX.Element}
 */

const AnimatedButton = ({ text, onClick, ...props }) => {
    return (
        <button
            className="relative overflow-hidden group px-4 py-2 rounded font-medium"
            style={{ backgroundColor: THEME.primary, color: THEME.surface }}
            onClick={onClick}
            {...props}
        >
            {/* Élément qui apparaît au survol */}
            <div
                className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"
                style={{ backgroundColor: THEME.secondary }}
            ></div>

            {/* Contenu du bouton qui reste au premier plan */}
            <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">
        {text}
      </span>
        </button>
    );
};

export default AnimatedButton;