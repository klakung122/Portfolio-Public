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

function Projects() {
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
                <span>POS Project</span>
                <div>
                    <span>
                        {t("project1.des")}
                    </span>
                </div>
            </div>

            <Controls />

            <div className="card">
                <video
                    src="/project1.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="video-bg"
                />
            </div>

            <div className="details">
                <div className="mock-con">
                    <div className="device device-iphone-14-pro mock">
                        <div className="device-frame mock">
                            <video
                                src="/project1-mobile.MP4"
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
                        <span>POS Project</span>
                        <span>{t("project.title-info")}</span>
                    </div>

                    <div className='info'>
                        <span>{t("project1.info")}</span>
                        <span>{t("project1.info2")}</span>
                        <span className='pass'>{t("project.pass")}</span>
                    </div>

                    <div className="btn-con">
                        <button type="button" className='controlbtn visit' onClick={() => window.open("https://pos.watcharakon.info/", "_blank")}>
                            <span>Visit This Project</span>
                            <FaLongArrowAltRight />
                        </button>

                        <button type="button" className='controlbtn github' onClick={() => window.open("https://github.com/klakung122/POS-Public", "_blank")}>
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

export default Projects