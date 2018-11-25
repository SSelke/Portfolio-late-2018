import React, { Component } from 'react';
import axios from 'axios';

class About extends Component {
    render() {
        const image = axios.get('/public/images/me.jpeg');
        console.log(image);
        return (
            <div className="container-fluid m-0 p-0 text-center h-100">
                <div>
                    <h2>About</h2>
                </div>  
                <div className="container">
                    <img src='/images/me.jpeg' alt="" />
                    <div className="row">
                        <div className="col">
                            <h3>Scott Selke | Web Developer and Designer</h3>
                            <p>Since turning my passion into a career, I have worked as a freelance developer for the past year. In this time I have created everything from landing pages to web applications.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;