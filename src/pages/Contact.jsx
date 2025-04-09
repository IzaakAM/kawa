import React from "react";

function ContactPage() {
    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-amber-800">Nous Contacter</h2>

            <div className="bg-white p-6 rounded-lg shadow mb-8">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-semibold mb-4 text-amber-700">Venez nous voir!</h3>
                        <p className="mb-4">
                            <strong>Le meilleur moyen de nous contacter est de venir directement au Kawa</strong> pour rencontrer notre équipe.
                            Nous serons ravis de discuter avec vous, que ce soit pour une simple question, une suggestion ou pour rejoindre notre association!
                        </p>
                        <p className="mb-4">
                            Notre équipe de bénévoles est présente pendant les horaires d'ouverture et sera heureuse de vous accueillir.
                        </p>

                        <h4 className="font-bold text-amber-800 mt-6 mb-2">Horaires d'ouverture:</h4>
                        <ul className="space-y-1 ml-4">
                            <li className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-amber-600 inline-block"></span>
                                Lundi - Vendredi: 8h00 - 20h00
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-amber-600 inline-block"></span>
                                Samedi: 10h00 - 18h00
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-amber-600 inline-block"></span>
                                Dimanche: Fermé
                            </li>
                        </ul>
                    </div>

                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-semibold mb-4 text-amber-700">Coordonnées</h3>

                        <div className="bg-amber-50 p-4 rounded mb-4 transition-all hover:translate-x-1">
                            <h4 className="font-bold text-amber-800 mb-2">Adresse</h4>
                            <p>Campus Universitaire, Bâtiment C<br />123 Rue des Étudiants<br />75000 Paris</p>
                        </div>

                        <div className="bg-amber-50 p-4 rounded mb-4 transition-all hover:translate-x-1">
                            <h4 className="font-bold text-amber-800 mb-2">Email</h4>
                            <p>contact@lekawa.fr</p>
                        </div>

                        <div className="bg-amber-50 p-4 rounded transition-all hover:translate-x-1">
                            <h4 className="font-bold text-amber-800 mb-2">Réseaux sociaux</h4>
                            <p>Suivez-nous sur Instagram et Facebook: @LeKawaCafe</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-2xl font-semibold mb-4 text-amber-700">Nous Rejoindre</h3>
                <p className="mb-4">
                    Vous souhaitez devenir bénévole ou membre de l'association Le Kawa? Venez nous rencontrer au café
                    pour discuter des différentes façons de vous impliquer dans notre projet associatif!
                </p>
                <div className="text-center mt-6">
                    <button className="bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white px-6 py-3 rounded text-lg transition-all hover:scale-105">
                        En savoir plus
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;