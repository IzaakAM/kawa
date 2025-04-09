// src/assets/styles/typography.jsx

import { LIGHT_MODE, DARK_MODE } from './constants.jsx';

// On peut rendre ce "isDarkMode" dynamique plus tard (Context, Redux, etc.)
const isDarkMode = false;
const THEME = isDarkMode ? DARK_MODE : LIGHT_MODE;

/**
 * Exemple de styles réutilisables pour les titres, sous-titres, paragraphes, etc.
 */
export const heading1Style = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: THEME.primary,
};

export const heading2Style = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: THEME.secondary,
};

export const heading3Style = {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '0.75rem',
    color: THEME.primary,
};

export const paragraphStyle = {
    fontSize: '1rem',
    marginBottom: '1rem',
    lineHeight: 1.5,
    color: THEME.text,
};
