import React, { Component } from 'react';
import './Home.scss';

class Home extends Component {
    render() {
        return (
            <div className="container-fluid m-0 p-0 text-center h-100">
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
                                <i class="fas fa-ruler-combined"></i>
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
            </div>
        );
    }
}

export default Home;