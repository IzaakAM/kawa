function Footer() {
    return (
        <footer className="bg-amber-800 text-white py-4">
            <div className="container mx-auto px-4 text-center">
                <p>&copy; {new Date().getFullYear()} Association Le Kawa - Tous droits réservés</p>
            </div>
        </footer>
    )
}

export default Footer;