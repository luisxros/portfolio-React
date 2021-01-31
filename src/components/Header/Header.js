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
                    <li><Link to='#1'>About</Link></li>
                    <li><Link to='#2'>Projects</Link></li>
                    <li><Link to='#3'>Skills</Link></li>
                    <li><Link to='#4'>Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;