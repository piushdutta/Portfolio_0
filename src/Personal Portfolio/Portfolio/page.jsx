import React, { useEffect } from "react";
import style from "./style.module.css";
import Lottie from "lottie-react";
import Developer from '../../assets/Developer Front End.json';
import { Link } from "react-scroll";
import { ReactTyped } from "react-typed";
import profileImg from "../../assets/22P31A05B5.png";
import {
    FaLinkedinIn,
    FaGithub,
    FaArrowRight,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaExternalLinkAlt
} from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { GiAchievement } from "react-icons/gi";
import { Data } from "./projectsdata";
import { Certificate } from "./certificates";
import resume from "../../assets/Resume_Piush.pdf";

const Portfolio = () => {
    // Reveal animation on scroll
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(style.reveal);
                }
            });
        }, observerOptions);

        const sections = document.querySelectorAll(`.${style.section}, .${style.heroSection}`);
        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const skillsData = [
        { name: "React", level: 90 },
        { name: "NodeJs", level: 85 },
        { name: "JavaScript", level: 85 },
        { name: "C++", level: 80 },
        { name: "Java", level: 75 },
        { name: "HTML/CSS", level: 95 },
        { name: "SQL", level: 70 },
        { name: "Python", level: 65 },
    ];

    return (
        <div className={style.pageWrapper}>
            <div className="glowing-bg"></div>

            <header className={style.navContainer}>
                <div className={style.logo}>PIUSH.DEV</div>
                <nav>
                    <ul className={style.navLinks}>
                        <li><Link to="Home" spy={true} smooth={true} duration={500}>Home</Link></li>
                        <li><Link to="About" spy={true} smooth={true} duration={500} offset={-80}>About</Link></li>
                        <li><Link to="Skills" spy={true} smooth={true} duration={500} offset={-80}>Skills</Link></li>
                        <li><Link to="Projects" spy={true} smooth={true} duration={500} offset={-80}>Projects</Link></li>
                        <li><Link to="Contact" spy={true} smooth={true} duration={500} offset={-80}>Contact</Link></li>
                    </ul>
                </nav>
                <div className={style.navCta}>
                    <a href={resume} download className={style.secondaryBtn} style={{ padding: '10px 20px', fontSize: '0.85rem' }}>
                        Resume <GoDownload />
                    </a>
                </div>
            </header>

            <main>
                {/* Hero Section */}
                <section id="Home" className={style.heroSection}>
                    <div className={style.heroContent}>
                        <span className={style.heroBadge}>Available for hire</span>
                        <h1 className={style.heroTitle}>
                            Crafting Digital <br />
                            Experience as a <br />
                            <span>
                                <ReactTyped
                                    strings={["Full Stack Dev", "React Explorer", "MERN Specialist"]}
                                    typeSpeed={60}
                                    backSpeed={40}
                                    loop
                                />
                            </span>
                        </h1>
                        <p className={style.heroText}>
                            I build exceptional and accessible digital experiences for the web.
                            Specializing in high-performance React applications and scalable backend solutions.
                        </p>
                        <div className={style.ctaGroup}>
                            <Link to="Projects" smooth={true} duration={500} offset={-80}>
                                <button className={style.primaryBtn}>
                                    View Projects <FaArrowRight />
                                </button>
                            </Link>
                            <div className={style.social}>
                                <a href="https://www.linkedin.com/in/piushdutta/" target="_blank" rel="noreferrer" className={style.iconBox}>
                                    <FaLinkedinIn />
                                </a>
                                <a href="https://github.com/piushdutta" target="_blank" rel="noreferrer" className={style.iconBox}>
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={style.heroVisual}>
                        <Lottie animationData={Developer} className={style.lottie} style={{ width: '100%', maxWidth: '500px' }} />
                    </div>
                </section>

                {/* About Section */}
                <section id="About" className={style.section}>
                    <div className={style.sectionHeading}>
                        <h2>About Me</h2>
                        <div className={style.headingUnderline}></div>
                    </div>
                    <div className={style.aboutGrid}>
                        <div className={style.aboutImage}>
                            <img src={profileImg} alt="Piush Dutta" />
                        </div>
                        <div className={style.bioContent}>
                            <h3>Building the web with precision and passion.</h3>
                            <p className={style.bioText}>
                                I am a motivated Full Stack Web Developer with a focus on modern web technologies.
                                Recently completed a systematic specialization in HTML, CSS, JavaScript, and frameworks including React and Node.js.
                                Proficient in developing high-performance applications and enthusiastic about solving complex problems.
                            </p>
                            <div style={{ marginBottom: '2rem' }}>
                                <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Education</h4>
                                <p style={{ fontSize: '1rem', fontWeight: '600' }}>Aditya College of Engineering & Technology</p>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>B.Tech in Computer Science & Engineering (2022 - 2026)</p>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', fontStyle: 'italic', marginTop: '4px' }}>
                                    Coursework: Data Structures, DBMS, Operating Systems, Computer Networks
                                </p>
                            </div>
                            <div className={style.statsGrid}>
                                <div className={style.statItem}>
                                    <span className={style.statNum}>B.Tech</span>
                                    <span className={style.statLabel}>CSE Student</span>
                                </div>
                                <div className={style.statItem}>
                                    <span className={style.statNum}>10+</span>
                                    <span className={style.statLabel}>Core Skills</span>
                                </div>
                                <div className={style.statItem}>
                                    <span className={style.statNum}>1+</span>
                                    <span className={style.statLabel}>Major Projects</span>
                                </div>
                                <div className={style.statItem}>
                                    <span className={style.statNum}>100%</span>
                                    <span className={style.statLabel}>Success Rate</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="Skills" className={style.section}>
                    <div className={style.sectionHeading}>
                        <h2>Core Expertise</h2>
                        <div className={style.headingUnderline}></div>
                    </div>
                    <div className={style.skillsGrid}>
                        {skillsData.map((skill, index) => (
                            <div key={index} className={style.skillCard}>
                                <div className={style.skillHeader}>
                                    <span className={style.skillLabel}>{skill.name}</span>
                                    <span className={style.skillPercent}>{skill.level}%</span>
                                </div>
                                <div className={style.progressTrack}>
                                    <div className={style.progressBar} style={{ width: `${skill.level}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Certificates Section */}
                <section id="Certificates" className={style.section}>
                    <div className={style.sectionHeading}>
                        <h2>Certifications</h2>
                        <div className={style.headingUnderline}></div>
                    </div>
                    <div className={style.skillsGrid}>
                        {Certificate.map((item, index) => (
                            <div key={index} className={style.skillCard} style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <div className={style.iconBox} style={{ background: 'var(--accent-glow)' }}>
                                    <GiAchievement style={{ fontSize: '1.5rem', color: 'var(--accent)' }} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1rem', marginBottom: '4px' }}>{item.name}</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{item.platform} • {item.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Projects Section */}
                <section id="Projects" className={style.section}>
                    <div className={style.sectionHeading}>
                        <h2>Selected Works</h2>
                        <div className={style.headingUnderline}></div>
                    </div>
                    <div className={style.projectGrid}>
                        {Data.map((item, index) => (
                            <div key={index} className={style.projectCard}>
                                <div className={style.projectImage}>
                                    <Lottie animationData={item.image} style={{ width: '80%', height: '80%' }} />
                                </div>
                                <div className={style.projectInfo}>
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                    <a href={item.link} target="_blank" rel="noreferrer" className={style.projectLink}>
                                        View Case Study <FaExternalLinkAlt size={14} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact Section */}
                <section id="Contact" className={style.section}>
                    <div className={style.sectionHeading}>
                        <h2>Get In Touch</h2>
                        <div className={style.headingUnderline}></div>
                    </div>
                    <div className={style.contactWrapper}>
                        <div className={style.contactInfo}>
                            <h3>Let's talk about <br /> your project</h3>
                            <div className={style.contactItem}>
                                <div className={style.iconBox}><FaEnvelope /></div>
                                <div>
                                    <label style={{ fontSize: '0.75rem', color: 'var(--accent)' }}>Email Me</label>
                                    <p>piushdutta32@gmail.com</p>
                                </div>
                            </div>
                            <div className={style.contactItem}>
                                <div className={style.iconBox}><FaPhone /></div>
                                <div>
                                    <label style={{ fontSize: '0.75rem', color: 'var(--accent)' }}>Call Me</label>
                                    <p>+91 896-761-5027</p>
                                </div>
                            </div>
                            <div className={style.contactItem}>
                                <div className={style.iconBox}><FaMapMarkerAlt /></div>
                                <div>
                                    <label style={{ fontSize: '0.75rem', color: 'var(--accent)' }}>Location</label>
                                    <p>West Bengal, India</p>
                                </div>
                            </div>
                        </div>
                        <form className={style.contactForm}>
                            <div className={style.inputGroup}>
                                <label>Your Name</label>
                                <input type="text" placeholder="John Doe" />
                            </div>
                            <div className={style.inputGroup}>
                                <label>Your Email</label>
                                <input type="email" placeholder="john@example.com" />
                            </div>
                            <div className={style.inputGroup}>
                                <label>Message</label>
                                <textarea rows="4" placeholder="How can I help you?"></textarea>
                            </div>
                            <button type="submit" className={style.primaryBtn} style={{ width: '100%', justifyContent: 'center' }}>
                                Send Message
                            </button>
                        </form>
                    </div>
                </section>
            </main>

            <footer style={{ padding: '40px 8%', borderTop: '1px solid var(--glass-border)', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <p>© {new Date().getFullYear()} Piush Dutta. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Portfolio;