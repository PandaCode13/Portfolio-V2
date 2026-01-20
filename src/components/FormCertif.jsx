import formations from "../data/formations";
import "../CSS/Formations.css";

function FormCertif() {
    return(
        <section className="form-certif" id="form-certif">
            <div className="formation">
                <h2>Formations</h2>

                {
                    formations.map((formation) => (
                        <div className="formation-card master" key={formation.id}>
                            <div className="formation-info">
                                <div className="header">
                                    <div className="logo">
                                        <img src={formation.logo} alt={formation.title} />
                                    </div>
                                    <div className="title-duration">
                                        <h3><strong>Diplôme: </strong> {formation.title}</h3>
                                        <p>Durée: {formation.date}</p>
                                    </div>
                                </div>

                                <div className="content">
                                    <p><strong>Établissement: </strong>{formation.institution}</p>
                                    <p><strong>Description: </strong>{formation.description}</p>
                                    <p><strong>Localisation: </strong>{formation.adresse}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default FormCertif;