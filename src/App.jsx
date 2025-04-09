// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AccueilPage from './pages/Accueil';
import CartePage from './pages/Carte';
import ContactPage from './pages/Contact';

export default function KawaApp() {
    return (
        <div className="min-h-screen w-screen bg-amber-50">
            <Header />

            <main className="container mx-auto px-4 py-8">
                <Routes>
                    <Route path="/" element={<AccueilPage />} />
                    <Route path="/carte" element={<CartePage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}
