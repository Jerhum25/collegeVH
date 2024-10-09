import React from 'react';
import './header.scss'
import { Link } from 'react-router-dom';
function Header(props) {
    return (
        <div className='headerContainer'>
            <h1 className='logo'>Collège Victor Hugo - Besançon</h1>
            <div className="menu">
                <div className='links'>
                    <Link to="/">accueil</Link>
                    <Link to="/professeurs">professeurs</Link>
                    <Link to="/classes">classes</Link>
                    <Link to="/contact">contact</Link>
                </div>
                <div className="connexion">connexion</div>
            </div>
            
        </div>
    );
}

export default Header;