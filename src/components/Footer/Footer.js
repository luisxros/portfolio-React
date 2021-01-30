import React from 'react';
import './Footer.css';

function Footer(props) {
    return(
        <footer className="Footer">
                <p>Copyright&copy; Luis Rosario {new Date().getFullYear()} All Rights Reserved</p>
        </footer>
    );
}

export default Footer;