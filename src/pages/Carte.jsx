import React from "react";
import '../assets/styles/customHover.css';

import {heading1Style, heading2Style, heading3Style, paragraphStyle} from "../assets/styles/typography.jsx";

function CartePage() {
    return (
        <div className="max-w-5xl mx-auto">
            <h1 style={heading1Style} >Notre Carte</h1>

            <div className="bg-white p-6 rounded-lg shadow mb-8">
                <p style={paragraphStyle}>
                    Découvrez notre sélection de boissons chaudes, rafraîchissements et en-cas
                    préparés avec soin pour satisfaire toutes vos envies.
                </p>

                <div className="bg-amber-50 p-6 rounded-lg border-2 border-dashed border-amber-300 flex flex-col items-center justify-center">
                    <embed src="/menuKawa.pdf" width="100%" height="600px" type="application/pdf" />
                    <p style={paragraphStyle}>
                        Pour intégrer votre PDF, vous devrez l'héberger et utiliser un composant comme react-pdf pour l'afficher.
                    </p>
                    <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded transition-colors">
                        Télécharger la carte (PDF)
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartePage;