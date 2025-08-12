import react from "react";
import '../styles/Home.css';
import Sidebar from '../components/sidebar/Sidebar';
import Footer from '../components/footer/Footer';
import { FaReact, FaDocker } from "react-icons/fa6";
import { FaNode } from "react-icons/fa";
import { SiPhp, SiMysql, SiPolymerproject } from "react-icons/si";
import { PiFigmaLogoFill } from "react-icons/pi";

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

    return (
        <main className='container'>
            <div className="about">
                <span>Watcharakon Chaveewongprateep</span>
                <div>
                    <span>Welcome to the portfolio of Watcharakorn Chaveewongprateep</span>
                    <span>This portfolio presents a curated collection of projects I have created and developed during 2024-2025. Each work embodies my identity, perspective, and creative process, showcasing a diverse range of projects crafted with dedication, attention to detail, and a passion for innovation.</span>
                    <span>Thank you sincerely for taking the time to view my work.</span>
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

                <div className="projects-card-con">
                    <span className='title'>Projects</span>
                    <div className="project-card">
                        <div className="img" />
                        <div className="project-title">
                            <SiPolymerproject className='project-icon' />
                            <span>POS Project</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default Home