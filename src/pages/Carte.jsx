import React from "react";
import '../assets/styles/customHover.css';

import {heading1Style, heading2Style, heading3Style, paragraphStyle} from "../assets/styles/typography.jsx";

function CartePage() {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 style={heading1Style} >Notre Carte</h1>

            <div className="bg-white p-6 rounded-lg shadow mb-8">
                <p style={paragraphStyle}>
                    Découvrez notre sélection de boissons chaudes, rafraîchissements et en-cas
                    préparés avec soin pour satisfaire toutes vos envies.
                </p>

                <div className="bg-amber-50 p-6 rounded-lg border-2 border-dashed border-amber-300 flex flex-col items-center justify-center">
                    <p style={paragraphStyle}>
                        Votre carte au format PDF sera affichée ici.
                    </p>
                    <p style={paragraphStyle}>
                        Pour intégrer votre PDF, vous devrez l'héberger et utiliser un composant comme react-pdf pour l'afficher.
                    </p>
                    <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded transition-colors">
                        Télécharger la carte (PDF)
                    </button>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
                <h2 style={heading2Style}> Nos spécialités </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-amber-50 p-4 rounded relative overflow-hidden group">
                        <div className="absolute inset-0 bg-amber-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform"></div>
                        <div className="relative z-10">
                            <h3 style={heading3Style} className={"colors-transition group-hover:text-white"}>Le Kawa Spécial</h3>
                            <p style={paragraphStyle} className={"colors-transition group-hover:text-white"}> Notre café signature avec une touche secrète qui fait toute la différence.</p>
                        </div>
                    </div>

                    <div className="bg-amber-50 p-4 rounded relative overflow-hidden group">
                        <div className="absolute inset-0 bg-amber-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform"></div>
                        <div className="relative z-10">
                            <h3 style={heading3Style} className={"colors-transition group-hover:text-white"}>Le Kawa Spécial</h3>
                            <p style={paragraphStyle} className={"colors-transition group-hover:text-white"}> Notre café signature avec une touche secrète qui fait toute la différence.</p>
                        </div>
                    </div>

                    <div className="bg-amber-50 p-4 rounded relative overflow-hidden group">
                        <div className="absolute inset-0 bg-amber-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform"></div>
                        <div className="relative z-10">
                            <h3 style={heading3Style} className={"colors-transition group-hover:text-white"}>Le Kawa Spécial</h3>
                            <p style={paragraphStyle} className={"colors-transition group-hover:text-white"}> Notre café signature avec une touche secrète qui fait toute la différence.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CartePage;