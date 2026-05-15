import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import './Skills.css';

const skills = [
        { name: "JavaScript", level: 40 },
        { name: "PHP", level: 60 },
        { name: "MySQL", level: 60 },
        { name: "Python", level: 60 },
        { name: "HTML", level: 90 },
        { name: "CSS", level: 80 },
        { name: "Java", level: 30 },
        { name: "UI/UX Design", level: 75 }
    ];

const Skills: React.FC = () => {
    const [animateSkills, setAnimateSkills] = useState(false);
    useEffect(()=> {
        setTimeout(()=> setAnimateSkills(true), 300);
    })

    return (
        <IonPage>
            <Navbar/>
            <IonContent fullscreen>
                <div id='skills' className="skill-section">
                    <h2 className="section-title">My Skills</h2>

                    <div className="skill-container">
                        {skills.map((skill, index) => (
                            <div className="skill-item" key={index}>
                                <span>{skill.name}</span>

                                <div className="progress-bar">
                                    <div
                                        className="progress-fill"
                                        style={{
                                            width: animateSkills ? skill.level + "%" : "0%",
                                            transitionDelay: `${index * 0.2}s`
                                        }}
                                    ></div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Skills;