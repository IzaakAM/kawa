//src/pages/accueil.jsx

import React from "react";

import { heading1Style, heading2Style, heading3Style, paragraphStyle} from "../assets/styles/typography.jsx";

function AccueilPage() {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 style={heading1Style}>Bienvenue au Kawa !</h1>

            <div className="bg-white p-6 rounded-lg shadow mb-8">
                <h3 style={heading2Style}>Notre Association Étudiante</h3>

                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/2">
                        <p style={paragraphStyle}>
                            Le Kawa est bien plus qu'un simple café, c'est un lieu de vie et d'échange créé par et pour les étudiants.
                            Fondée en 2018, notre association s'engage à offrir un espace convivial où les étudiants peuvent se retrouver
                            autour d'un bon café, travailler ensemble, ou simplement profiter d'un moment de détente.
                        </p>
                        <p style={paragraphStyle}>
                            Nous organisons régulièrement des événements culturels, des soirées à thème, des ateliers créatifs
                            et des sessions d'étude collaborative. Notre équipe est composée entièrement d'étudiants bénévoles
                            passionnés qui consacrent leur temps libre à faire vivre ce lieu unique sur le campus.
                        </p>
                    </div>

                    <div className="md:w-1/2 flex justify-center">
                        <div className="bg-amber-100 p-4 rounded-lg h-64 w-full flex items-center justify-center">
                            <span className="text-amber-800 text-lg">Image du café Kawa</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
                <h3 style={heading2Style}>Nos Valeurs</h3>

                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-amber-50 p-4 rounded transition-all hover:bg-amber-100 hover:scale-105">
                        <h3 style={heading3Style}>Convivialité</h3>
                        <p style={paragraphStyle}>Un espace chaleureux et accueillant pour tous les étudiants, sans distinction.</p>
                    </div>

                    <div className="bg-amber-50 p-4 rounded transition-all hover:bg-amber-100 hover:scale-105">
                        <h3 style={heading3Style}>Solidarité</h3>
                        <p style={paragraphStyle}>Des prix accessibles et des initiatives d'entraide entre étudiants.</p>
                    </div>

                    <div className="bg-amber-50 p-4 rounded transition-all hover:bg-amber-100 hover:scale-105">
                        <h3 style={heading3Style}>Durabilité</h3>
                        <p style={paragraphStyle}>Un engagement écologique dans toutes nos activités et nos choix de fournisseurs.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccueilPage;