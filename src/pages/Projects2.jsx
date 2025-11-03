import React from 'react';
import '../styles/Projects.css';
import Footer from '../components/footer/Footer';
import Controls from '../components/controls/Controls';
import ProjectCard from '../components/projectcard/Projectcard';
import { FaReact, FaDocker } from "react-icons/fa6";
import { FaNode } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaLongArrowAltRight } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import useTexts from "../lang/useTexts";

function Projects2() {
    const t = useTexts();

    const skills = [
        { icon: <FaReact className="skill-icon react" /> },
        { icon: <FaNode className="skill-icon node" /> },
        { icon: <FaDocker className="skill-icon docker" /> },
        { icon: <SiMysql className="skill-icon mysql" /> },
    ];

    return (
        <main className='container'>
            <div className="about">
                <span>ZombieOutbreak Project</span>
                <div>
                    <span>
                        {t("project2.des")}
                    </span>
                </div>
            </div>

            <Controls />

            <div className="details">
                <div className="mock-con">
                    <div className="device device-iphone-14-pro">
                        <div className="device-frame mock">
                            <video
                                src="/project2-mobile.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="video-bg"
                            />
                        </div>
                    </div>
                </div>
                <div className="dl-body">
                    <div className='title-info'>
                        <span>ZombieOutbreak Project</span>
                        <span>{t("project.title-info")}</span>
                    </div>

                    <div className='info'>
                        <span>{t("project.info")}</span>
                        <ul>
                            <li>{t("project2.infolist1")}</li>
                            <li>{t("project2.infolist2")}</li>
                            <li>{t("project2.infolist3")}</li>
                            <li>{t("project2.infolist4")}</li>
                        </ul>
                        <span>{t("project.info2")}</span>
                        <ul>
                            <li><span>Frontend:</span> React</li>
                            <li><span>Backend:</span> Node.js , Express</li>
                            <li><span>Database:</span> MySQL</li>
                            <li><span>Containerization / Deployment:</span> Docker</li>
                        </ul>
                    </div>

                    <div className="btn-con">
                        <button type="button" className='controlbtn visit' onClick={() => window.open("https://zombie.watcharakon.info/", "_blank")}>
                            <span>Visit This Project</span>
                            <FaLongArrowAltRight />
                        </button>

                        <button type="button" className='controlbtn github' onClick={() => window.open("https://github.com/klakung122/ZombieOutbreak-Public", "_blank")}>
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

export default Projects2