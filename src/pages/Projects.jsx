import React from 'react';
import '../styles/Projects.css';
import Sidebar from '../components/sidebar/Sidebar';
import Footer from '../components/footer/Footer';
import Controls from '../components/controls/Controls';
import ProjectCard from '../components/projectcard/Projectcard';
import { FaReact, FaDocker } from "react-icons/fa6";
import { FaNode } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaLongArrowAltRight } from "react-icons/fa";

function Projects() {
    const skills = [
        { icon: <FaReact className="skill-icon react" /> },
        { icon: <FaNode className="skill-icon node" /> },
        { icon: <FaDocker className="skill-icon docker" /> },
        { icon: <SiMysql className="skill-icon mysql" /> },
    ];

    return (
        <main className='container'>
            <div className="about">
                <span>POS Project</span>
                <div>
                    <span>This portfolio presents a curated collection of projects I have created and developed during 2024-2025. Each work embodies my identity, perspective, and creative process, showcasing a diverse range of projects crafted with dedication, attention to detail, and a passion for innovation.</span>
                </div>
            </div>

            <Controls />

            <div className="card">
                <div className="img" style={{ backgroundImage: 'url(/ProjectFrame1.png)' }} />
            </div>

            <div className="details">
                <div className="mock-con">
                    <div className="device device-iphone-14-pro">
                        <div className="device-frame">
                            <div className="device-screen">
                                <iframe src="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dl-body">
                    <div>
                        <span>POS Project</span>
                        <span> and some additional information</span>
                    </div>

                    <div>
                        <span>Explain what your project is about: what kind of problem does it solve, who is the target group, and how does it provide a sufficient solution?</span>
                    </div>

                    <button type="button" className='controlbtn visit' onClick={() => window.open("", "_blank")}>
                        <span>Visit This Project</span>
                        <FaLongArrowAltRight />
                    </button>
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

export default Projects