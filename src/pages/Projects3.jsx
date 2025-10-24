import React from 'react';
import '../styles/Projects.css';
import Footer from '../components/footer/Footer';
import Controls from '../components/controls/Controls';
import ProjectCard from '../components/projectcard/Projectcard';
import { FaReact } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import 'devices.css/dist/devices.min.css';
import { AiOutlineGithub } from "react-icons/ai";
import useTexts from "../lang/useTexts";

function Projects3() {
    const t = useTexts();

    const skills = [
        { icon: <FaReact className="skill-icon react" /> },
    ];

    return (
        <main className='container'>
            <div className="about">
                <span>BirthDay Project</span>
                <div>
                    <span>{t("project3.des")}</span>
                </div>
            </div>

            <Controls />

            <div className="details">
                <div className="mock-con">
                    <div className="device device-iphone-14-pro">
                        <div className="device-frame mock">
                            <video
                                src="/project3-mobile.mp4"
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
                        <span>BirthDay Project</span>
                        <span>{t("project.title-info")}</span>
                    </div>

                    <div className='info'>
                        <span>{t("project3.info")}</span>
                    </div>

                    <div className="btn-con">
                        <button type="button" className='controlbtn visit' onClick={() => window.open("https://beanday-39888.web.app/", "_blank")}>
                            <span>Visit This Project</span>
                            <FaLongArrowAltRight />
                        </button>

                        <button type="button" className='controlbtn github' onClick={() => window.open("https://github.com/klakung122/beanday-Public", "_blank")}>
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

export default Projects3