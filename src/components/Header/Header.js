import React from 'react';
import { HashLink as Link} from 'react-router-hash-link';
import './Header.css';

function Header(props) {
    return(
        <header className="Header">
            <div className="Name">
                Luis Rosario
            </div>
            <div className="Title">
                Full Stack Software Engineer
            </div>
            <nav>
                <ul className='NavLinks'>
                    <li><Link to='#about'>About</Link></li>
                    <li><Link to='#skills'>Skills</Link></li>
                    <li><Link to='#projects'>Projects</Link></li>
                    <li><Link to='#contact'>Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;