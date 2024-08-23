// src/components/Home.js

import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <section id="home" className="home">
            <div className="intro">
                <h1 className="animated-text">Hi, I am <span>SUBHAM RAJ</span></h1>
                <p className="animated-text">A passionate web and software developer. I also do electronics.</p>
            </div>
            <button className="resume-button">Download Resume</button>
        </section>
    );
};

export default Home;