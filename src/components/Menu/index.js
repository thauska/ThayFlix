import React from 'react';
import Logo from '../../assets/img/logo.png';
import './styles.css';

import Button from '../Button';

function Menu() {
    return (
        <nav className="menu">
            <a href="/" >
                <img className="logo" src={Logo} alt="logo ThayFlix" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;