import React from 'react';
import Luis from '../../images/Luis.jpg';
import './About.css';

function About(props) {
    
    return(
        <div className="About" id="1">
            <h1>About Me:</h1>
            <div>
                <img src={Luis} className="photo" alt="Luis"/>
            </div>
            <div className="info">
            <p>
                    I’m a Software Engineer with a background in customer service, and degree in design. I use my
                    experiences together to make interactions with my clients better, and be able to fulfill their
                    needs.
                </p>
            </div>
            <div className="file">
                
            </div>
        </div>
    );
}

export default About;