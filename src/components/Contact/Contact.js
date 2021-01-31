import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Contact.css';

function Contact(props) {
    return(
        <div className="Contact" id="4">
            <h1>Contact:</h1>
            <div className="info4">
               <a href="https://www.linkedin.com/in/luisxrosario/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
               <a href="https://github.com/luisxros" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
               <a href="mailto:luisalmonter@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} /></a>
            </div>
        </div>
    );
}

export default Contact;