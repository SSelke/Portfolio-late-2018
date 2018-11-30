import React, { Component } from 'react';
import '../About/About.scss';
import './Home.scss';

class Home extends Component {
    render() {
        return (
            <div className="container-fluid m-0 p-0 text-center h-100">
                <header>
                    <nav className="d-flex justify-content-end">
                        <button className="btn btn-outline-info btn-bg">Contact</button>
                    </nav>
                </header>
                <div className="home-header">
                    <h1>Full-Stack Developer, Designer, and Professional Nerd</h1>
                    <p className="text-muted">I am a dynamic and detail-oriented developer with a keen eye for design.</p>
                </div>
                <div className="container-fluid m-0 p-0 main">
                    <div className="home-images"></div>
                    <div className="home-message d-flex justify-content-center">
                        <div>
                            <h1 className="mb-2">What's Up, I'm Scottie.</h1>
                            <p>I have a knack for delivering elegant, and user-friendly web apps efficiently and effectively. I have been a freelance developer for a year, a systems administrator for almost two years, and a nerd for 22 years. I am a self-proclaimed nerd because I truely enjoy developing tools for the world to use.</p>
                        </div>
                    </div>
                </div>
                <div className="container home-skillz">
                    <div className="row h-100">
                        <div className="col m-0 h-100 text-center">
                            <div className="mt-5 skillz-container">
                                <i className="fa fa-code"></i>
                                <h3 className="my-4">Full-Stack Developer</h3>
                                <p>All of my apps are built with proper programming philosophies in mind. In my opinion, structured and reusable code is the best thing since In-N-Out burger.</p>
                                <div className="skillz-content">
                                    <h5>Technologies</h5>
                                    <p>HTML5, CSS3: Sass - Less, JavaScript: ES5 - ES6, JQuery, React.js: Redux - Redux Thunk | React Router, Angluar5, Node,js: Express.js, Python: Flask - Django, MongoDB, MySQL, REST</p>
                                </div>
                                <div className="skillz-content">
                                    <h5>Dev Tools</h5>
                                    <ul>
                                        <li>Atom</li>
                                        <li>Codepen</li>
                                        <li>Command Prompt</li>
                                        <li>Git</li>
                                        <li>Github</li>
                                        <li>Google Analytics</li>
                                        <li>Mlab</li>
                                        <li>Postman</li>
                                        <li>Sublime</li>
                                        <li>Terminal</li>
                                        <li>Visual Studio Code</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col m-0 h-100">
                            <div className="mt-5 skillz-container h-100">
                                <i className="fas fa-ruler-combined"></i>
                                <h3 className="my-4">Designer</h3>
                                <p>The End-Users experience is the most important aspect of a website to me. Prospects demand a website that is fluid, functional and attractive.</p>
                                <div className="skillz-content">
                                    <h5>What I design</h5>
                                    <p>UX, UI, Logos, Animated SVGs</p>
                                </div>
                                <div className="skillz-content">
                                    <h5>Design Tools</h5>
                                    <ul>
                                        <li>Illustrator</li>
                                        <li>Keynote</li>
                                        <li>Microsoft Office</li>
                                        <li>Paper & Pencil</li>
                                        <li>Photoshop</li>
                                        <li>Sketch</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid m-0 p-0 py-5 recent-work">
                    <div className="recent-work-header mb-5">
                        <h2>Recent Work</h2>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 my-3">
                                <a href="http://retro-archive.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                    <div className="recent-work-tile retro">
                                        <div className="hover d-flex align-items-center justify-content-center"><h4>Retro Archive</h4></div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 my-3">
                                <a href="https://sselke.github.io/clone-website/" target="_blank" rel="noopener noreferrer">
                                    <div className="recent-work-tile morris">
                                        <div className="hover d-flex align-items-center justify-content-center"><h4>Morris Jenkins</h4></div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 my-3">
                                <a href="http://revenue-calculator.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                    <div className="recent-work-tile revenue">
                                        <div className="hover d-flex align-items-center justify-content-center"><h4>Revenue Calculator</h4></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid m-0 p-0 text-center h-100">
                    <div className="about-header">
                        <h2>About</h2>
                    </div>
                    <div className="container">
                        <img className="about-image" src='/public/images/me.jpeg' alt="" />
                        <div className="row">
                            <div className="col m-5">
                                <div className="about-summary">
                                    <h5>Scott Selke | Web Developer and Designer</h5>
                                    <p>During highschool I took every Photoshop, Design and Programming class available to increase my technical skills. While in school, I was the president of our schools STEM program, which intailed going to other district schools and conferences to give speeches about the STEM initiative (700+ people usually). After highschool I completed Arizona CTE Engineering Sciences Program and recieved my certification of completion.</p>
                                    <p>After graduating, I started my Associates degree at Mesa Community College where I studied Computer Science. To be honest, I did not finish college; it was too expensive and I had no way of continuing. Once I have a more stable work situation I plan on continuing my formal education. As stated above, I am a professional nerd and programming is my true passion. Since I left college in early 2018, I have lost myself in programming books and the most esteemed web bootcamps on the internet.</p>
                                    <p>Since turning my passion into a career, I have worked as a freelance developer for the past year. Most of my clients projects were landing pages, website renovation, or independent web apps.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;