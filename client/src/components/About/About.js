import React, { Component } from 'react';
import './About.scss';

class About extends Component {

    render() {

        return (
            <div className="container-fluid m-0 p-0 text-center h-100">
                <div className="about-header">
                    <h2>About</h2>
                </div>  
                <div className="container">
                    <img className="about-image" src='http://localhost:5000/public/images/me.jpeg' alt="" />
                    <div className="row">
                        <div className="col m-5">
                            <div className="about-summary">
                                <h5>Scott Selke | Web Developer and Designer</h5>
                                <p>During highschool I took every Photoshop, Design and Programming class available to increase my technical skills. While in school, I was the president of our schools STEM program, which intailed going to other district schools and conferences to give speeches about the STEM initiative (700+ people usually). After highschool I completed Arizona CTE Engineering Sciences Program and recieved my certification of completion.</p>
                                <p>After graduating in 2015, I started my Associates degree at Mesa Community College where I studied Computer Science. After graduating, I spent most of my time designing, building, and using many personal projects to sharpen my skillset. My projects range from a <a href="">video game collection website</a> to home automation</p>
                                <p>Since turning my passion into a career, I have worked as a freelance developer for the past year. Most of my clients projects were landing pages, website renovation, or independent web apps.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;