import { useRef } from "react";
import '../styles/Home.css';
import Sidebar from '../components/sidebar/Sidebar';
import Footer from '../components/footer/Footer';
import { FaReact, FaDocker } from "react-icons/fa6";
import { FaNode } from "react-icons/fa";
import { SiPhp, SiMysql, SiPolymerproject } from "react-icons/si";
import { PiFigmaLogoFill } from "react-icons/pi";
import ProjectCard from "../components/projectcard/Projectcard";

function Home() {
    const webdevskills = [
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

    const wrapRef = useRef(null);   // .projects-card-con
    const trackRef = useRef(null);  // .projects-track

    const dragging = useRef(false);
    const startX = useRef(0);
    const startTX = useRef(0);      // translateX ตอนเริ่มลาก
    const PADDING = 160;

    const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

    const onPointerDown = (e) => {
        const wrap = wrapRef.current;
        const track = trackRef.current;
        if (!wrap || !track) return;

        dragging.current = true;
        wrap.setPointerCapture?.(e.pointerId);

        // ตำแหน่งเริ่ม + ค่า translateX ปัจจุบัน
        startX.current = e.clientX;
        const matrix = new DOMMatrixReadOnly(
            getComputedStyle(track).transform === "none"
                ? "matrix(1,0,0,1,0,0)"
                : getComputedStyle(track).transform
        );
        startTX.current = matrix.m41; // translateX ปัจจุบัน
    };

    const onPointerMove = (e) => {
        if (!dragging.current) return;
        const wrap = wrapRef.current;
        const track = trackRef.current;
        if (!wrap || !track) return;

        const dx = e.clientX - startX.current;

        const wrapW = wrap.clientWidth;      // รวม padding ซ้าย/ขวาแล้ว
        const contentW = track.scrollWidth;  // ความกว้างจริงของรายการทั้งหมด

        const maxTX = 0;                                     // ซ้ายสุด = 0
        let minTX = wrapW - contentW - 2 * PADDING;          // ขวาสุดหัก padding ซ้าย+ขวา

        // ถ้าเนื้อหาสั้นกว่าพื้นที่แสดงผล ก็ล็อกไว้ที่ 0 ไปเลย
        if (contentW + 2 * PADDING <= wrapW) {
            minTX = maxTX;
        }

        const nextTX = clamp(startTX.current + dx, minTX, maxTX);
        track.style.transform = `translateX(${nextTX}px)`;
    };

    const endDrag = (e) => {
        if (!dragging.current) return;
        dragging.current = false;
        wrapRef.current?.releasePointerCapture?.(e.pointerId);
    };

    return (
        <main className='container'>
            <div className="about">
                <span>Watcharakon Chaveewongprateep</span>
                <div>
                    <span className="first">Welcome to the portfolio of Watcharakorn Chaveewongprateep</span>
                    <span>This portfolio presents a curated collection of projects I have created and developed during 2024-2025. Each work embodies my identity, perspective, and creative process, showcasing a diverse range of projects crafted with dedication, attention to detail, and a passion for innovation.</span>
                    <span className="last">Thank you sincerely for taking the time to view my work.</span>
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
                            <ProjectCard title="POS Project" imgUrl="/ProjectFrame.png" />
                            <ProjectCard title="BirthDay Project" imgUrl="/ProjectFrame1.png" />
                            <ProjectCard title="Rental Room Project" imgUrl="/ProjectFrame2.png" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default Home