import React from 'react';
import Style from './Navbar.module.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={Style.Container}>
            <ul className={Style.NavBar}>
                <div className={Style.Logo}>
                    <li><Link to="/">Victor tattoo</Link></li>
                </div>
                <div className={Style.Menu}>
                    <li><Link to="https://www.instagram.com/victortattoox/">Instagram</Link></li>
                    <li><Link to="https://api.whatsapp.com/message/ZHZ2G2PR7DTVF1?autoload=1&app_absent=0">WhatsApp</Link></li>
                    <li><Link to="/projetos">Projetos</Link></li>
                </div>
            </ul>
        </div>
    );
};

export default Navbar;
