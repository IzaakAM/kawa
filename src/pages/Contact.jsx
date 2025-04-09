import React from "react";

import { heading1Style, heading2Style, heading3Style, paragraphStyle } from "../assets/styles/typography.jsx";

function ContactPage() {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 style={heading1Style}> Nous Contacter </h1>

            <div className="bg-white p-6 rounded-lg shadow mb-8">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                        <h2 style={heading2Style}>Venez nous voir!</h2>
                        <p style={paragraphStyle}>
                            <strong>Le meilleur moyen de nous contacter est de venir directement au Kawa </strong> pour rencontrer notre équipe.
                            Nous serons ravis de discuter avec vous, que ce soit pour une simple question, une suggestion ou pour rejoindre notre association!
                        </p>
                        <p style={paragraphStyle}>
                            Notre équipe de bénévoles est présente pendant les horaires d'ouverture et sera heureuse de vous accueillir.
                        </p>

                        <h3 style={heading3Style}> Horaires d'ouverture </h3>

                    </div>

                    <div className="md:w-1/2">
                        <h2 style={heading2Style}> Coordonnées </h2>

                        <div className="bg-amber-50 p-4 rounded mb-4 transition-all hover:translate-x-1">
                            <h3 style={heading3Style}>Adresse</h3>
                            <p style={paragraphStyle}>Campus Universitaire, Bâtiment C<br />123 Rue des Étudiants<br />75000 Paris</p>
                        </div>

                        <div className="bg-amber-50 p-4 rounded mb-4 transition-all hover:translate-x-1">
                            <h3 style={heading3Style}>Email</h3>
                            <p style={paragraphStyle}>contact@lekawa.fr</p>
                        </div>

                        <div className="bg-amber-50 p-4 rounded transition-all hover:translate-x-1">
                            <h3 style={heading3Style}>Réseaux sociaux</h3>
                            <p style={paragraphStyle}>Suivez-nous sur Instagram et Facebook: @LeKawaCafe</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-2xl font-semibold mb-4 text-amber-700">Nous Rejoindre</h3>
                <p style={paragraphStyle}>
                    Vous souhaitez devenir bénévole ou membre de l'association Le Kawa? Venez nous rencontrer au café
                    pour discuter des différentes façons de vous impliquer dans notre projet associatif!
                </p>
            </div>
        </div>
    );
}

export default ContactPage;