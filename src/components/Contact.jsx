import React from 'react';
import '../CSS/Contact.css';

function Contact() {
    // Composant Formulaire interne
    const FormContact = () => (
        <div className="formulaire">
            <h2>Contactez-moi</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="firstName">Prénom :</label>
                    <input type="text" id="firstName" name="firstName" required />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Nom :</label>
                    <input type="text" id="lastName" name="lastName" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email :</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message :</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );

    return (
        <section className="contact" id="contact">
            <div className="informations">
                <h2>Contactez-moi</h2>
                <p>
                    Je suis toujours ouvert à discuter de nouveaux projets, idées créatives ou opportunités professionnelles. 
                    N'hésitez pas à me contacter via les informations ci-dessous :
                </p>
                <ul>
                    <li>
                        <strong>Email :</strong> 
                        <a href="mailto:smohamedabdo895@gmail.com">smohamedabdo895@gmail.com</a>
                    </li>
                    <li>
                        <strong>Téléphone :</strong> 
                        <a href="tel:+33766435207">+33 7 66 43 52 07</a>
                    </li>
                    <li>
                        <strong>Adresse :</strong> 
                        <a href="https://maps.google.com/?q=Saint-Denis, Paris, France">Saint-Denis, Paris, France</a>
                    </li>
                </ul>
            </div>
            <FormContact />
        </section>
    );
}

export default Contact;
