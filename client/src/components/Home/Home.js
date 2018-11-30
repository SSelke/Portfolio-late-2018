import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './About.scss';
import './Resources.scss';
import './Home.scss';

class Home extends Component {
    render() {
        return (
            <div className="container-fluid m-0 p-0 text-center h-100">
                <header className="container pt-5">
                    <div className="d-flex justify-content-between">
                        <div><img src="/public/images/logo.svg" height="50" alt=""/></div>
                        <Link to="/contact">
                            <div><button className="btn header-contact">Say Hi</button></div>
                        </Link>
                    </div>
                </header>
                <div className="home-header">
                    <h1>Full-Stack Developer, Designer, and Professional Nerd</h1>
                    <p className="text-muted">I am a dynamic and detail-oriented developer with a keen eye for design.</p>
                </div>
                <div className="container-fluid m-0 p-0 main">
                    <div className="home-images">
                        <img src="/public/images/mountains.svg" alt="" />
                    </div>
                    <div className="home-message d-flex justify-content-center">
                        <div>
                            <h1 className="mb-2">What's Up, I'm Scottie.</h1>
                            <p>I have a knack for delivering elegant, and user-friendly web apps efficiently and effectively. I have been a freelance developer for a year, a systems administrator for almost two years, and a functional programmer the last 4 years. I am a self-proclaimed nerd because I truely enjoy developing tools for the world to use.</p>
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
                <div className="triangle"></div>
                <div className="container-fluid m-0 footer text-white">
                    <div className="row h-100">
                        <div className="col-md-6 d-flex">
                            <div className="mx-5 my-auto">
                                <h1>Get in Touch</h1>
                                <p className="text-muted my-3">It would be an honor for me to grow with you business.</p>
                                <Link to="/contact">
                                    <button className="btn btn-info float-md-left float-sm-none contact-footer my-3">Contact Me</button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex">
                            <div className="mx-5 my-auto contact-links">
                                <div className="my-3"><i className="fab fa-github mr-3"></i><a href="https://github.com/SSelke?tab=repositories" target="_blank" rel="noopener noreferrer">Github // SSelke</a></div>
                                <div className="my-3"><i className="fab fa-linkedin mr-3"></i><a href="https://www.linkedin.com/in/scott-selke/" target="_blank" rel="noopener noreferrer">LinkedIn // scott-selke</a></div>
                                <div className="my-3"><i className="fab fa-twitch mr-3"></i><a href="https://www.twitch.tv/lofidevelopment" target="_blank" rel="noopener noreferrer">Twitch // LofiDevelopment</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;