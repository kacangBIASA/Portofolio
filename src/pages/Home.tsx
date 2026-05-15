import {
  IonContent,
  IonPage,
  IonText,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonAvatar
} from '@ionic/react';
import { useEffect, useRef, useState } from 'react';
import Navbar from "../components/Navbar";
import './Home.css';


const Home: React.FC = () => {
  // const textRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach(entry => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add('show');
  //         }
  //       });
  //     },
  //     { threshold: 0.3 }
  //   );

  //   if (textRef.current) observer.observe(textRef.current);
  // }, []);

  // const aboutRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach(entry => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add('show');
  //         }
  //       });
  //     },
  //     { threshold: 0.25 }
  //   );

  //   if (aboutRef.current) observer.observe(aboutRef.current);
  // }, []);

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add('show');
  //       }
  //     });
  //   }, { threshold: 0.2 });

  //   const hiddenElements = document.querySelectorAll('.scroll-hidden');
  //   hiddenElements.forEach(el => observer.observe(el));

  // }, []);

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add('show');

  //         // Jika element adalah progress-fill
  //         if (entry.target.classList.contains('progress-fill')) {
  //           const skillValue = entry.target.getAttribute('data-skill');
  //           if (skillValue) {
  //             (entry.target as HTMLElement).style.width = skillValue + '%';
  //           }
  //         }
  //       }
  //     });
  //   }, { threshold: 0.3 });

  //   const hiddenElements = document.querySelectorAll(
  //     '.scroll-hidden, .progress-fill'
  //   );

  //   hiddenElements.forEach(el => observer.observe(el));

  // }, []);

  // const [animateSkills, setAnimateSkills] = useState(false);
  // const skillRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const skillObserver = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach(entry => {
  //         if (entry.isIntersecting) {
  //           setAnimateSkills(true);
  //         }
  //       });
  //     },
  //     { threshold: 0.4 }
  //   );

  //   if (skillRef.current) {
  //     skillObserver.observe(skillRef.current);
  //   }
  // }, []);


  return (
    <IonPage>
      <Navbar />
      <IonContent fullscreen>

        <div id='hero' className="hero-container">

          <IonGrid>
            <IonRow className="ion-align-items-center">

              <IonCol size="12" sizeMd="6" className="hero-left">
                <IonAvatar className="hero-avatar">
                  <img src="/img/Ridho2.jpeg" alt="profile" />
                </IonAvatar>
              </IonCol>

              <IonCol size="12" sizeMd="6" className="hero-right">
                <IonText>
                  <h1 className="hero-name">Ridho Nasrullah</h1>
                  <h2 className="hero-role">Developer pemula</h2>
                  <p className="hero-desc">
                    Selamat datang di website portofolio saya. Website ini dibangun menggunakan Ionic React dan 
                    berisi tentang pengalaman saya sebagai developer, serta beberapa project yang telah saya kerjakan. 
                    Saya berharap dapat berbagi ilmu dan pengalaman saya melalui website ini, dan juga dapat membantu 
                    orang lain yang membutuhkan informasi tentang pengembangan website dan aplikasi.
                  </p>
                </IonText>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
