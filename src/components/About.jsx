import "../CSS/About.css";

function About() {
    return (
        <section className="about" id="about">
            <h2>À propos de moi</h2>
            <p>Développeur web fullstack junior avec une solide expérience en <br />développement d'applications modernes et une large gamme <br />de compétences techniques.</p>
            <div className="infosParc">
                <div className="infos">
                    <h3>Informations Personnelles</h3>
                    <ul>
                        <li><i className="fa-solid fa-envelope"></i> <span>Adresse E-mail: </span> smohamedabdo895@gmail.com</li>
                        <li><i className="fa-solid fa-phone"></i> <span>Téléphone: </span> +33 7 66 43 52 07</li>
                        <li><i className="fa-solid fa-location-dot"></i> <span>Adresse: </span> Saint-Denis, Paris, France</li>
                    </ul>
                </div>
                <div className="parcours">
                    <h3>Parcours Professionnel</h3>
                    <p>Diplomé d'un baccalauréat scientifique, j'ai acquis des compétences en développement web et mobile à travers divers projets académiques et personnels lors de ma formation de licence en informatiques. <br /> Mon expertise inclut HTML, CSS, JavaScript, ainsi que des frameworks comme React et Node.js. Je suis également compétent en gestion de bases de données avec MySQL et MongoDB. <br /> Passionné par la technologie, je suis constamment à la recherche de nouvelles opportunités pour apprendre et évoluer dans le domaine du développement web.</p>
                </div>
            </div>

            <div className="doubleObjec">
                <div className="perso">
                    <h3>Objectifs Personnels</h3>
                    <p>Sur le plan personnel, je souhaite renforcer mes compétences en leadership et en gestion de projet, tout en approfondissant continuellement mes compétences techniques et logicielles, afin de gagner en efficacité, en autonomie et en impact dans des environnements professionnels exigeants.</p>
                </div>
                <div className="profes">
                    <h3>Objectifs Professionnels</h3>
                    <p>Contribuer au succès d'une entreprise innovante en mettant à profit mes compétences en développement web et mobile, tout en continuant à apprendre et à évoluer dans un environnement stimulant.</p>
                </div>
            </div>
        </section>
    )
}

export default About