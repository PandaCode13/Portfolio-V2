import { useState, useEffect } from "react";
import "../CSS/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(false);

  // 3. Logique pour appliquer la classe au body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

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

      <div className={`header-content ${menuOpen ? "open" : ""}`}>
        {/* Bouton fermer pour mobile */}
        <button 
          className="close-menu" 
          onClick={() => setMenuOpen(false)}
          aria-label="Fermer le menu"
        >
          ×
        </button>

        <nav>
          <ul>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Accueil</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>À propos</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>Compétences</a></li>
            <li><a href="#form-certif" onClick={() => setMenuOpen(false)}>Formation</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projets</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>

        <div className="header-right">
          
          <button id="mode-toggle" onClick={() => setDarkMode(!darkMode)}>
            <i className={`fa-solid ${darkMode ? "fa-moon" : "fa-sun"}`}></i>{" "}
            {darkMode ? "Mode Sombre" : "Mode Clair"}
          </button>

          <div className="profil-button">
            <a
              href="../assets/CV DE SAID MOHAMED ABDO (2).pdf"
              download
              onClick={() => setMenuOpen(false)}
            >
              <i className="fa-solid fa-download"></i> Télécharger mon CV
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              <i className="fa-solid fa-envelope"></i> Me contacter
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;