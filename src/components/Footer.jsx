import "../CSS/Footer.css";

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="title">
                    <h3>Said MOHAMED ABDO</h3>
                    <p>Développeur fullstack et web</p>
                    <p className="attention">Disponible pour des nouveaux projets et nouveaux défis</p>
                </div>
                <div className="contact-info">
                    <h4>Contactez-moi</h4>
                    <p>Email: smohamedabdo895@gmail.com</p>
                    <p>Téléphone: +33 7 66 43 52 07</p>
                    <p>Adresse: Saint-Denis, Paris, France</p>
                </div>
                <div className="navigation">
                    <h4>Navigation</h4>
                    <ul>
                        <li><a href="#home">Accueil</a></li>
                        <li><a href="#about">À propos</a></li>
                        <li><a href="#formation">Formation</a></li>
                        <li><a href="#projects">Projets</a></li>
                        <li><a href="#skills">Compétences</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="socialMedia">
                    <h2>Liens de mes réseaux sociaux</h2>
                    <a className="linkeldn" href="https://www.linkedin.com/in/said-mohamed-abdo-47083a379" target="_blank"><i className="fa-brands fa-linkedin"></i>LinkedIn</a>
                    <a className="github" href="https://github.com/PandaCode13" target="_blank"><i className="fa-brands fa-github"></i>GitHub</a>
                    <a className="instagram" href="https://www.instagram.com/pandacoding24/" target="_blank"><i className="fa-brands fa-instagram"></i>Instagram</a>
                    <a className="email" href="mailto:smohamedabdo895@gmail.com" target="_blank"><i className="fa-solid fa-envelope"></i>Email</a>
                </div>
            </div>
            <div className="footer-droits">
                <p>&copy; 2026 SMA. Tous droits réservés.</p>
                <p>Dévelopé par Said Mohamed Abdo avec passion et expertise technique</p>
            </div>
        </footer>
    )
}

export default Footer;