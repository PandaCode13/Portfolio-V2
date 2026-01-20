import "../CSS/Home.css"
import photoSaid from "../assets/photo-said.jpg";

function Home() {
    return (
        <section className="home" id="home">
            <div className="text">
                <h1>SAID MOHAMED ABDO</h1>
                <h3>Développeur Full Stack Web</h3>
                <p>Bienvenue sur mon portfolio ! Je suis un développeur full stack web passionné, spécialisé dans la création de sites web modernes et d'applications mobiles performantes. Explorez mes projets et n'hésitez pas à me contacter pour toute collaboration.</p>
                <div className="cta-button">
                    <a href="#projects" className="btn btn-download"><i className="fas fa-folder-open"></i>Voir mes projets</a>
                    <a href="#contact" className="btn btn-contact"><i className="fas fa-envelope"></i>Me contacter</a>
                </div>
            </div>
            <div className="image">
                <img src={photoSaid} alt="Coucou" width="300" height="300" border="2"/>
            </div>
        </section>
    )
}

export default Home;