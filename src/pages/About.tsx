import { IonContent, IonGrid, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import Navbar from '../components/Navbar';
import './About.css';
import { useEffect, useRef, useState } from 'react';

const About: React.FC = () => {
    const textRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);

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
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    }
                });
            },
            { threshold: 0.25 }
        );

        if (aboutRef.current) observer.observe(aboutRef.current);
    }, []);

    return (
        <IonPage>
            <Navbar />
            <IonContent fullscreen>
                <IonGrid>
                <div id='about' className="about-section">
                    <div ref={textRef} className="about-card scroll-hidden">
                        <h2>About Me</h2>
                        <p>
                            Saya adalah developer pemula yang fokus pada pengembangan website dan aplikasi
                            dengan html, css, php, js sampai framework seperti laravel dan ionic react. Saya juga cukup tertarik pada bidang UI/UX.
                        </p>
                    </div>

                </div>

                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default About;