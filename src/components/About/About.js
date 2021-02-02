import React from 'react';
import Luis from '../../images/Luis.jpg';
import './About.css';

function About(props) {
    
    return(
        <div className="About" id="about">
            <h1>About Me:</h1>
            <div>
                <img src={Luis} className="photo" alt="Luis"/>
            </div>
            <div className="file">
                <a href="https://docs.google.com/document/d/1qR19YpR-olJRWffDwmJku2gv9fhlJ8F5z9kpZmzudI0/edit?usp=sharing" target="_blank">Resume</a>
            </div>
            <div className="info1">
            <p>
                    I’m a Software Engineer with a background in customer service, and degree in design. I use my
                    experiences together to make interactions with my clients better, and be able to fulfill their
                    needs.
                </p>
            </div>
           
        </div>
    );
}

export default About;