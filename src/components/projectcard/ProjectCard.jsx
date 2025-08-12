import { useRef } from "react";
import { SiPolymerproject } from "react-icons/si";
import './ProjectCard.css';

function ProjectCard({ title, imgUrl }) {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const rect = cardRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100 + "%";
        const y = ((e.clientY - rect.top) / rect.height) * 100 + "%";
        cardRef.current.style.setProperty("--x", x);
        cardRef.current.style.setProperty("--y", y);
    };

    return (
        <div
            className="project-card"
            ref={cardRef}
            onMouseMove={handleMouseMove}
        >
            <div className="img" style={{ backgroundImage: `url(${imgUrl})` }} >
                <span>{title}</span>
            </div>
            <div className="project-title">
                <SiPolymerproject className="project-icon" />
                <span>{title}</span>
            </div>
        </div>
    )
}

export default ProjectCard