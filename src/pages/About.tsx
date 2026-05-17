import { IonContent, IonGrid, IonPage } from '@ionic/react';
import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import './About.css';
import { IonIcon } from '@ionic/react';
import { mailOutline, logoWhatsapp, locationOutline } from 'ionicons/icons';

const About: React.FC = () => {
    const textRef = useRef<HTMLDivElement>(null);
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

        if (textRef.current) observer.observe(textRef.current);
        if (contactRef.current) observer.observe(contactRef.current);
        
        return () => observer.disconnect();
    }, []);

    return (
        <IonPage>
            <Navbar />
            <IonContent fullscreen>
                <div className="page-padding">
                    <IonGrid>
                        <div id='about' className="about-section">
                            <div ref={textRef} className="about-card scroll-hidden">
                                <h2 className="section-title">ABOUT ME</h2>
                                <p className="about-text">
                                    Saya adalah developer pemula yang fokus pada pengembangan website dan aplikasi
                                    dengan HTML, CSS, PHP, JS, hingga framework seperti Laravel dan Ionic React. 
                                    Saya juga sangat tertarik pada bidang UI/UX Design dan selalu berusaha 
                                    membuat antarmuka yang user-friendly serta estetis.
                                </p>
                            </div>
                        </div>

                        <div id='contact' className="contact-section">
                            <div ref={contactRef} className="contact-card scroll-hidden">
                                <h2 className="section-title">GET IN TOUCH</h2>
                                <p className="contact-subtitle">Mari berkolaborasi dan buat sesuatu yang luar biasa bersama.</p>
                                
                                <div className="contact-info">
                                    <div className="contact-item">
                                        <IonIcon icon={mailOutline} className="contact-icon" />
                                        <span>email@example.com</span>
                                    </div>
                                    <div className="contact-item">
                                        <IonIcon icon={logoWhatsapp} className="contact-icon" />
                                        <span>+62 812-3456-7890</span>
                                    </div>
                                    <div className="contact-item">
                                        <IonIcon icon={locationOutline} className="contact-icon" />
                                        <span>Indonesia</span>
                                    </div>
                                </div>
                                
                                <button className="btn-primary mt-4">Send a Message</button>
                            </div>
                        </div>
                    </IonGrid>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default About;