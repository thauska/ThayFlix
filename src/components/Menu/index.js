import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './styles.css';

import Button from '../Button';

function Menu() {
    return (
        <nav className="menu">
            <Link to="/" >
                <img className="logo" src={Logo} alt="logo ThayFlix" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;