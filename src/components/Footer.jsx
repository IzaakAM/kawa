import { LIGHT_MODE, DARK_MODE, FONTS } from '../assets/styles/constants.jsx';

// Exemple de sélection de mode (vous pouvez le définir dynamiquement)
const isDarkMode = false;
const THEME = isDarkMode ? DARK_MODE : LIGHT_MODE;

function Footer() {
    return (
        <footer style={{ backgroundColor: THEME.primary, padding: '0.5rem'  }}>
            <div className="container mx-auto px-4 text-center">
                <p style={{color: THEME.onContainer}}> &copy; {new Date().getFullYear()} Association Le Kawa - Tous droits réservés</p>
            </div>
        </footer>
    )
}

export default Footer;