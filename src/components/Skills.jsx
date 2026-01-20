import skills from '../data/skills';
import "../CSS/Skills.css";

function Skills() {
    return (
        <section className="skills" id="skills">
            <h3>Compétences Techniques & Logicielles</h3>
            <p>Un panomara complet de mon expertise technologique</p>

            <div className="bilan-card">
                <div className="card">
                    <div className="icon">
                        <i className="fa-solid fa-layer-group"></i>
                    </div>
                    <div className="text">
                        <p>30+ <br />Compétences</p>
                    </div>
                </div>
                <div className="card">
                    <div className="icon">
                        <i className="fa-solid fa-layer-group"></i>
                    </div>
                    <div className="text">
                        <p>5 <br />Domaines</p>
                    </div>
                </div>
                <div className="card">
                    <div className="icon">
                        <i className="fa-solid fa-layer-group"></i>
                    </div>
                    <div className="text">
                        <p>100% <br />Polyvants</p>
                    </div>
                </div>
            </div>

            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        <div className="skill-icon">
                            <i className="fa-solid fa-code"></i>
                        </div>
                        <h4>{skill.title}</h4>
                        <ul>
                            {skill.list.map((item, id) => (
                                <li key={id}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}<br />
            </div>
        </section>
    )
}

export default Skills;