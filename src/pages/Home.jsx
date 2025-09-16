import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Home.css';
import Sidebar from '../components/sidebar/Sidebar';
import Footer from '../components/footer/Footer';
import { FaReact, FaDocker, FaCss3Alt } from "react-icons/fa6";
import { FaNode, FaHtml5, FaJsSquare } from "react-icons/fa";
import { SiPhp, SiMysql, SiPolymerproject } from "react-icons/si";
import { PiFigmaLogoFill } from "react-icons/pi";
import ProjectCard from "../components/projectcard/Projectcard";
import useTexts from "../lang/useTexts";

function Home() {
    const t = useTexts();

    const webdevskills = [
        { icon: <FaHtml5 className="skill-icon html" /> },
        { icon: <FaCss3Alt className="skill-icon css" /> },
        { icon: <FaJsSquare className="skill-icon js" /> },
        { icon: <FaReact className="skill-icon react" /> },
        { icon: <FaNode className="skill-icon node" /> },
        { icon: <FaDocker className="skill-icon docker" /> },
        { icon: <SiPhp className="skill-icon php" /> },
    ];

    const uxuiskills = [
        { icon: <PiFigmaLogoFill className="skill-icon figma" /> },
    ];

    const dataskills = [
        { icon: <SiMysql className="skill-icon mysql" /> },
    ];

    const DRAG_THRESHOLD = 8; // ขยับเกินนี้ค่อยนับว่า drag

    const navigate = useNavigate();

    const wrapRef = useRef(null);
    const trackRef = useRef(null);

    const pointerDown = useRef(false);
    const dragging = useRef(false);
    const startX = useRef(0);
    const startY = useRef(0);
    const startTX = useRef(0);

    const PADDING = 160;
    const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

    const onPointerDown = (e) => {
        const wrap = wrapRef.current;
        const track = trackRef.current;
        if (!wrap || !track) return;

        pointerDown.current = true;
        dragging.current = false; // ยังไม่ถือว่า drag จนกว่าจะเกิน threshold
        startX.current = e.clientX;
        startY.current = e.clientY;

        const matrix = new DOMMatrixReadOnly(
            getComputedStyle(track).transform === "none"
                ? "matrix(1,0,0,1,0,0)"
                : getComputedStyle(track).transform
        );
        startTX.current = matrix.m41;
    };

    const onPointerMove = (e) => {
        if (!pointerDown.current) return;

        const dx = e.clientX - startX.current;
        const dy = e.clientY - startY.current;

        // เพิ่งจะเริ่ม drag ก็ต่อเมื่อเกิน threshold
        if (!dragging.current) {
            if (Math.hypot(dx, dy) > DRAG_THRESHOLD) {
                dragging.current = true;
                // จับ pointer ตอนนี้เพื่อให้ลากลื่น
                wrapRef.current?.setPointerCapture?.(e.pointerId);
                trackRef.current?.classList.add("dragging");
            } else {
                return; // ยังไม่ลากจริง อย่าขยับ track
            }
        }

        const wrap = wrapRef.current;
        const track = trackRef.current;
        if (!wrap || !track) return;

        const wrapW = wrap.clientWidth;
        const contentW = track.scrollWidth;

        const maxTX = 0;
        let minTX = wrapW - contentW - 2 * PADDING;
        if (contentW + 2 * PADDING <= wrapW) minTX = maxTX;

        const nextTX = clamp(startTX.current + dx, minTX, maxTX);
        track.style.transform = `translateX(${nextTX}px)`;
    };

    const endDrag = (e) => {
        if (!pointerDown.current) return;

        // ปลดสถานะ
        pointerDown.current = false;
        wrapRef.current?.releasePointerCapture?.(e.pointerId);
        trackRef.current?.classList.remove("dragging");

        // ถ้าไม่ได้ drag จริง (ไม่เกิน threshold) ให้ถือว่าเป็น "tap" → นำทาง
        if (!dragging.current) {
            // หา card ใกล้สุดที่โดน tap
            const cardEl = e.target.closest(".project-card");
            const path = cardEl?.dataset?.path;
            if (path) navigate(path);
        }
        dragging.current = false;
    };

    return (
        <main className='container'>
            <div className="about">
                <span>{t("home.name")}</span>
                <div>
                    <span className="first">{t("home.title")}</span>
                    <span>{t("home.title2")}</span>
                    <span className="last">{t("home.title3")}</span>
                </div>
            </div>
            <div className="content">
                <div className="skills-con">
                    <span className='title'>Skills</span>
                    <div className="skills">
                        <span className='sub-title'>Web Dev</span>
                        <div className="skill-con">
                            {webdevskills.map((s, i) => (
                                <div className="skill" key={i}>
                                    {s.icon}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="skills">
                        <span className='sub-title'>UX/UI</span>
                        <div className="skill-con">
                            {uxuiskills.map((s, i) => (
                                <div className="skill" key={i}>
                                    {s.icon}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="skills">
                        <span className='sub-title'>Database</span>
                        <div className="skill-con">
                            {dataskills.map((s, i) => (
                                <div className="skill" key={i}>
                                    {s.icon}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="projects-con">
                    <span className='title'>Projects</span>
                    <div
                        className="projects-card-con"
                        ref={wrapRef}
                        onPointerDown={onPointerDown}
                        onPointerMove={onPointerMove}
                        onPointerUp={endDrag}
                        onPointerCancel={endDrag}
                    >
                        <div className="projects-track" ref={trackRef}>
                            <ProjectCard
                                title="POS Project"
                                imgUrl="/ProjectFrame1.png"
                                path="/projects"
                            />
                            <ProjectCard
                                title="ZombieOutbreak Project"
                                imgUrl="/ProjectFrame3.png"
                                path="/projects2"
                            />
                            <ProjectCard
                                title="BirthDay Project"
                                imgUrl="/ProjectFrame.png"
                                path="/projects3"
                            />
                            <ProjectCard
                                title="Room Rental Project"
                                imgUrl="/ProjectFrame2.png"
                                path="/projects4"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home