import React from 'react';
import '../styles/Projects.css';
import Footer from '../components/footer/Footer';
import Controls from '../components/controls/Controls';
import ProjectCard from '../components/projectcard/Projectcard';
import { FaCss3Alt } from "react-icons/fa6";
import { FaNode, FaHtml5, FaJsSquare } from "react-icons/fa";
import { SiPhp, SiMysql } from "react-icons/si";
import { FaLongArrowAltRight } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import useTexts from "../lang/useTexts";

function Projects4() {
    const t = useTexts();

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
                <span>Room Rental Project</span>
                <div>
                    <span>{t("project4.des")}</span>
                </div>
            </div>

            <Controls />

            <div className="card">
                <video
                    src="/project4.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="video-bg"
                />
            </div>

            <div className="details">
                <div className="dl-body">
                    <div className='title-info'>
                        <span>Room Rental Project</span>
                        <span>{t("project.title-info")}</span>
                    </div>

                    <div className='info'>
                        <span>{t("project4.info")}</span>
                        <span className='pass'>{t("project.pass")}</span>
                    </div>

                    <div className="btn-con">
                        <button type="button" className='controlbtn visit' onClick={() => window.open("https://rental.watcharakon.info/", "_blank")}>
                            <span>Visit This Project</span>
                            <FaLongArrowAltRight />
                        </button>

                        <button type="button" className='controlbtn github' onClick={() => window.open("https://github.com/klakung122/Projectfinal-Public", "_blank")}>
                            <AiOutlineGithub />
                        </button>
                    </div>
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
        </main>
    )
}

export default Projects4