import { IonIcon } from "@ionic/react";
import { home, person, folderOpen, barChart, mail } from "ionicons/icons";
import { useLocation } from "react-router";
import { useIonRouter } from "@ionic/react";
import "./Navbar.css";
import { useMemo } from "react";

const Navbar: React.FC = () => {

    const router = useIonRouter();
    const location = useLocation();

    const navigate = (path: string) => {
        router.push(path, "forward", "push");
    };

    const activeIndex = useMemo(() => {
        switch (location.pathname) {
            case "/skills": return 0;
            case "/projects": return 1;
            case "/home": return 2;
            case "/about": return 3;
            case "/contact": return 4;
            default: return 2;
        }
    }, [location.pathname]);

    return (
        <div className="nav" style={{
            "--x": `${(activeIndex * 20) + 10}%`
        } as React.CSSProperties}>

            <div
                className={`nav-item border ${location.pathname === "/skills" ? "active" : ""}`}
                onClick={() => navigate("/skills")}
            >
                <IonIcon icon={barChart} />
            </div>

            <div
                className={`nav-item border ${location.pathname === "/projects" ? "active" : ""}`}
                onClick={() => navigate("/projects")}
            >
                <IonIcon icon={folderOpen} />
            </div>

            <div
                className={`nav-item border ${location.pathname === "/home" ? "active" : ""}`}
                onClick={() => navigate("/home")}
            >
                <IonIcon icon={home} />
            </div>

            <div
                className={`nav-item border ${location.pathname === "/about" ? "active" : ""}`}
                onClick={() => navigate("/about")}
            >
                <IonIcon icon={person} />
            </div>

            <div
                className={`nav-item border ${location.pathname === "/contact" ? "active" : ""}`}
                onClick={() => navigate("/contact")}
            >
                <IonIcon icon={mail} />
            </div>

        </div>
    );
};

export default Navbar;