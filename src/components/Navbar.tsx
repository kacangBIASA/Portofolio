import { IonIcon, IonModal, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonItem, IonLabel, IonInput, IonTextarea } from "@ionic/react";
import { logoGithub, logoInstagram, mail, chatbubbleEllipsesOutline, closeOutline } from "ionicons/icons";
import { useLocation } from "react-router";
import { useIonRouter } from "@ionic/react";
import React, { useState } from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
    const router = useIonRouter();
    const location = useLocation();
    const [showModal, setShowModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigate = (path: string) => {
        router.push(path, "forward", "push");
    };

    const handleFeedbackSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/xredzvro", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                alert("Pesan berhasil dikirim! Terima kasih atas masukannya.");
                form.reset();
                setShowModal(false); // Tutup modal setelah sukses
            } else {
                alert("Oops! Terjadi kesalahan saat mengirim pesan.");
            }
        } catch (error) {
            alert("Oops! Gagal mengirim pesan. Periksa koneksi internet Anda.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* Top Desktop Navigation */}
            <header className="top-header">
                <div className="logo-container">
                    <div className="avatar">RN</div>
                    <span className="brand-name">RIDHO NASRULLAH</span>
                </div>

                <nav className="nav-links">
                    <span
                        className={`nav-link ${location.pathname === "/home" ? "active" : ""}`}
                        onClick={() => navigate("/home")}
                    >
                        HOME
                    </span>
                    <span
                        className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
                        onClick={() => navigate("/about")}
                    >
                        ABOUT
                    </span>
                    <span
                        className={`nav-link ${location.pathname === "/skills" ? "active" : ""}`}
                        onClick={() => navigate("/skills")}
                    >
                        SKILLS
                    </span>
                    <span
                        className={`nav-link ${location.pathname === "/projects" ? "active" : ""}`}
                        onClick={() => navigate("/projects")}
                    >
                        PROJECTS
                    </span>
                </nav>
            </header>

            {/* Left Social Sidebar */}
            <div className="social-sidebar">
                <a href="https://github.com/kacangBIASA" target="_blank" rel="noreferrer" className="social-link">
                    <IonIcon icon={logoGithub} />
                </a>
                <a href="https://instagram.com/ridho.nasrullah" target="_blank" rel="noreferrer" className="social-link">
                    <IonIcon icon={logoInstagram} />
                </a>
                <a href="mailto:[ridhonasrullah45@gmail.com]" className="social-link">
                    <IonIcon icon={mail} />
                </a>
            </div>

            {/* Floating Chat / Feedback Button */}
            <div className="floating-chat-btn" onClick={() => setShowModal(true)} style={{ cursor: 'pointer' }}>
                <span className="chat-text">Send Feedback</span>
                <div className="chat-icon-wrapper">
                    <IonIcon icon={chatbubbleEllipsesOutline} />
                </div>
            </div>

            {/* Feedback Modal */}
            <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)} initialBreakpoint={0.75} breakpoints={[0, 0.5, 0.75, 1]} className="feedback-modal">
                <IonHeader className="ion-no-border">
                    <IonToolbar color="transparent">
                        <IonTitle>Send Feedback</IonTitle>
                        <IonButtons slot="end">
                            <IonButton onClick={() => setShowModal(false)}>
                                <IonIcon icon={closeOutline} size="large" />
                            </IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding feedback-content">
                    <div className="modal-header-text">
                        <h3>Hi there! 👋</h3>
                        <p>Punya masukan, saran, atau peluang kerja sama? Silakan kirim pesan Anda di bawah ini. Pesan Anda akan dikirim langsung ke email saya.</p>
                    </div>

                    <form onSubmit={handleFeedbackSubmit} className="feedback-form">
                        <IonInput
                            className="custom-input"
                            fill="outline"
                            label="Nama Lengkap"
                            labelPlacement="floating"
                            type="text"
                            name="name"
                            required
                        ></IonInput>

                        <IonInput
                            className="custom-input mt-3"
                            fill="outline"
                            label="Email Anda"
                            labelPlacement="floating"
                            type="email"
                            name="email"
                            required
                        ></IonInput>

                        <IonTextarea
                            className="custom-input mt-3"
                            fill="outline"
                            label="Pesan / Saran"
                            labelPlacement="floating"
                            name="message"
                            rows={5}
                            required
                        ></IonTextarea>

                        <button type="submit" className="btn-primary mt-4 w-100" disabled={isSubmitting}>
                            {isSubmitting ? "Mengirim..." : "Kirim Pesan 🚀"}
                        </button>
                    </form>
                </IonContent>
            </IonModal>
        </>
    );
};

export default Navbar;