import React from 'react';
import { HashLink as Link} from 'react-router-hash-link';
import './Header.css';

function Header(props) {
    return(
        <header className="Header">
            <div className="Name">
                <h1>Luis Rosario</h1>
            </div>
            <nav>
                <ul className='NavLinks'>
                    <li><Link to='#1'>About me</Link></li>
                    <li><Link to='#2'>Projects</Link></li>
                    <li><Link to='#3'>Skills</Link></li>
                    <li><Link to='#4'>Contact me</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;