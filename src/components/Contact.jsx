import React, { useState } from 'react';
import '../CSS/Contact.css';

function Contact() {

    const FormContact = () => {
        const [formData, setFormData] = useState({
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        });

        // Récupération des inputs
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        };

        // Soumission du formulaire
        const sendEmail = (e) => {
            e.preventDefault();

            const { firstName, lastName, email, message } = formData;

            // Validation
            if (
                firstName.trim() === "" ||
                lastName.trim() === "" ||
                email.trim() === "" ||
                message.trim() === ""
            ) {
                alert("Veuillez remplir tous les champs.");
                return;
            }

            console.log("Données envoyées :", formData);

            // 👉 Ici : EmailJS ou backend plus tard

            // Reset
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                message: ''
            });

            alert("Message prêt à être envoyé !");
        };

        return (
            <div className="formulaire">
                <h2>Contactez-moi</h2>

                <form onSubmit={sendEmail}>

                    <div className="form-group">
                        <label htmlFor="firstName">Prénom :</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName">Nom :</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email :</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message :</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit">Envoyer</button>
                </form>
            </div>
        );
    };

    return (
        <section className="contact" id="contact">
            <div className="informations">
                <h2>Contactez-moi</h2>
                <p>
                    Je suis toujours ouvert à discuter de nouveaux projets, idées créatives ou opportunités professionnelles.
                </p>
            </div>

            <FormContact />
        </section>
    );
}

export default Contact;