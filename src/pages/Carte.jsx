//src/pages/carte.jsx

import React from "react";


import { LIGHT_MODE, DARK_MODE } from '../assets/styles/constants.jsx';
const isDarkMode = false;
const THEME = isDarkMode ? DARK_MODE : LIGHT_MODE;
import {heading1Style, heading2Style, heading3Style, paragraphStyle} from "../assets/styles/typography.jsx";

import MyButton from "../components/Button";
                // Bouton avec effet de transition au survol

function CartePage() {

    const handleDownloadMenu = () => {
        // Logique pour télécharger le menu en PDF
        console.log('Téléchargement de la carte en PDF');
        // Vous pourriez ajouter ici la logique pour déclencher le téléchargement
        window.open('/menuKawa.pdf', '_blank');
    };

    return (
        <div className="max-w-4xl mx-auto">
            <h1 style={heading1Style}> Notre Carte </h1>

            <div
                className="p-6 rounded-lg shadow mb-8 flex flex-col items-center gap-4"
                style={{
                    backgroundColor: THEME.surface,
                }}
            >
                <p style={paragraphStyle}>
                    Découvrez notre sélection de boissons chaudes, rafraîchissements et en-cas
                    préparés avec soin pour satisfaire toutes vos envies.
                </p>

                <embed
                    src="/menuKawa.pdf#zoom=80"
                    width="100%"
                    height="600px"
                    type="application/pdf"
                />

                <MyButton
                    text="Télécharger la carte (PDF)"
                    onClick={handleDownloadMenu}
                    aria-label="Télécharger le menu en format PDF"
                />

            </div>
        </div>
    );
}

export default CartePage;