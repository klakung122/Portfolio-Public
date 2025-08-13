import React from 'react';
import '../styles/Projects.css';
import Sidebar from '../components/sidebar/Sidebar';
import Footer from '../components/footer/Footer';
import Controls from '../components/controls/Controls';
import ProjectCard from '../components/projectcard/Projectcard';
import { FaCss3Alt } from "react-icons/fa6";
import { FaNode, FaHtml5, FaJsSquare } from "react-icons/fa";
import { SiPhp, SiMysql } from "react-icons/si";
import { FaLongArrowAltRight } from "react-icons/fa";

function Projects3() {
    const skills = [
        { icon: <FaHtml5 className="skill-icon html" /> },
        { icon: <FaCss3Alt className="skill-icon css" /> },
        { icon: <FaJsSquare className="skill-icon js" /> },
        { icon: <SiPhp className="skill-icon php" /> },
        { icon: <SiMysql className="skill-icon mysql" /> },
    ];

    return (
        <main className='container'>
            <div className="about">
                <span>Rental Room Project</span>
                <div>
                    <span>This portfolio presents a curated collection of projects I have created and developed during 2024-2025. Each work embodies my identity, perspective, and creative process, showcasing a diverse range of projects crafted with dedication, attention to detail, and a passion for innovation.</span>
                </div>
            </div>

            <Controls />

            <div className="card">
                <div className="frame">
                    <iframe src="https://living-condo.com/" />
                </div>
            </div>

            <div className="details">
                <div className="dl-body">
                    <div>
                        <span>POS Project</span>
                        <span> and some additional information</span>
                    </div>

                    <div>
                        <span>Explain what your project is about: what kind of problem does it solve, who is the target group, and how does it provide a sufficient solution?</span>
                    </div>

                    <button type="button" className='controlbtn visit'><span>Visit Once UI</span><FaLongArrowAltRight /></button>
                </div>
            </div>

            <div className="skill-con tools">
                <div className="skills">
                    <span className='sub-title'>Tools</span>
                    <div className="skill-con">
                        {skills.map((s, i) => (
                            <div className="skill" key={i}>
                                {s.icon}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}

export default Projects3