import React from "react";

function CartePage() {
    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-amber-800">Notre Carte</h2>

            <div className="bg-white p-6 rounded-lg shadow mb-8">
                <p className="mb-6">
                    Découvrez notre sélection de boissons chaudes, rafraîchissements et en-cas
                    préparés avec soin pour satisfaire toutes vos envies.
                </p>

                <div className="bg-amber-50 p-6 rounded-lg border-2 border-dashed border-amber-300 flex flex-col items-center justify-center">
                    <p className="text-lg mb-4">
                        Votre carte au format PDF sera affichée ici.
                    </p>
                    <p className="text-sm text-amber-700 mb-4">
                        Pour intégrer votre PDF, vous devrez l'héberger et utiliser un composant comme react-pdf pour l'afficher.
                    </p>
                    <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded transition-colors">
                        Télécharger la carte (PDF)
                    </button>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-2xl font-semibold mb-4 text-amber-700">Nos Spécialités</h3>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-amber-50 p-4 rounded relative overflow-hidden group">
                        <div className="absolute inset-0 bg-amber-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform"></div>
                        <div className="relative z-10 transition-colors group-hover:text-white">
                            <h4 className="font-bold text-amber-800 mb-2 group-hover:text-white transition-colors">Le Kawa Spécial</h4>
                            <p>Notre café signature avec une touche secrète qui fait toute la différence.</p>
                        </div>
                    </div>

                    <div className="bg-amber-50 p-4 rounded relative overflow-hidden group">
                        <div className="absolute inset-0 bg-amber-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform"></div>
                        <div className="relative z-10 transition-colors group-hover:text-white">
                            <h4 className="font-bold text-amber-800 mb-2 group-hover:text-white transition-colors">Chocolat Chaud Maison</h4>
                            <p>Une recette réconfortante préparée avec du vrai chocolat fondu.</p>
                        </div>
                    </div>

                    <div className="bg-amber-50 p-4 rounded relative overflow-hidden group">
                        <div className="absolute inset-0 bg-amber-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform"></div>
                        <div className="relative z-10 transition-colors group-hover:text-white">
                            <h4 className="font-bold text-amber-800 mb-2 group-hover:text-white transition-colors">Pâtisseries du Jour</h4>
                            <p>Chaque jour, une nouvelle création sucrée préparée par nos bénévoles.</p>
                        </div>
                    </div>

                    <div className="bg-amber-50 p-4 rounded relative overflow-hidden group">
                        <div className="absolute inset-0 bg-amber-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform"></div>
                        <div className="relative z-10 transition-colors group-hover:text-white">
                            <h4 className="font-bold text-amber-800 mb-2 group-hover:text-white transition-colors">Formule Étudiant</h4>
                            <p>Une boisson chaude et un en-cas à prix réduit sur présentation de la carte étudiante.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartePage;