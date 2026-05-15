import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonGrid } from '@ionic/react';
import React from 'react';
import './Contact.css';
import Navbar from '../components/Navbar';
import { useRef, useEffect } from 'react';
import { logoGithub, logoInstagram, mail } from 'ionicons/icons';


const Contact: React.FC = () => {
    const contactRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (contactRef.current) observer.observe(contactRef.current);
    }, []);

    return (
        <IonPage>
            <Navbar />
            <IonContent fullscreen>
                <IonGrid>

                <div id='contact' className="contact-section">
                    <div ref={contactRef} className='contact-card'>
                        <h2>Contact</h2>
                        <p><IonIcon icon={mail} /> Email: ridhonasrullah45@gmail.com</p>
                        <p><IonIcon icon={logoInstagram} /> Instagram: ridho.nasrullah</p>
                        <p><IonIcon icon={logoGithub} /> GitHub: KacangBIASA</p>
                    </div>
                </div>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Contact
    ;