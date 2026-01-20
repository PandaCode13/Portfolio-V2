import { useState } from "react";
import "../CSS/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <h1>SMA</h1>

      {/* Bouton hamburger */}
      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={menuOpen ? "open" : ""}>
        <ul>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Accueil</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>À propos</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)}>Compétences</a></li>
          <li><a href="#form-certif" onClick={() => setMenuOpen(false)}>Formation</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projets</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>

      <button id="mode-toggle">
        <i className="fa-solid fa-sun"></i> Mode clair
      </button>

      <div className="profil-button">
        <a
          href="../assets/CV DE SAID MOHAMED ABDO (2).pdf"
          download
          className="button cv"
        >
          <i className="fa-solid fa-download"></i> Télécharger mon CV
        </a>
        <a href="#contact" className="button contact">
          <i className="fa-solid fa-envelope"></i> Me contacter
        </a>
      </div>
    </header>
  );
}

export default Header;
