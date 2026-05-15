import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import Navbar from '../components/Navbar';
import './Projects.css';

const Projects: React.FC = () => {

    return (
        <IonPage>
            <Navbar />
            <IonContent fullscreen>
                <div id='projects' className="project-section">

                    <h2 className="section-title">My Projects</h2>

                    <div className="project-grid">

                        <div className="project-card scroll-hidden">
                            <img src="/public/img/queuenow.png" alt="project" />

                            <div className="project-content">
                                <h3>QueueNow</h3>
                                <p>
                                    Aplikasi layanan kelola antrian untuk UMKM seperti babershop, apotek, restoran, dst.
                                </p>

                                <div className="tech">
                                    <span>PHP native</span>
                                    <span>MySQL</span>
                                </div>

                                <div className="project-buttons">
                                    <a href="https://queue-now.vercel.app/" className="btn-demo">Live Demo</a>
                                    <a href="https://github.com/kacangBIASA/QueueNow.git" className="btn-github">Github</a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </IonContent>
        </IonPage>
    );
};

export default Projects;