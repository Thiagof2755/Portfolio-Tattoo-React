import React from 'react';
import Style from './Navbar.module.scss';

const Navbar = () => {
    const smoothScroll = (target) => {
        const element = document.querySelector(target);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    const handleNavLinkClick = (e, target) => {
        e.preventDefault();
        smoothScroll(target);
    };

    return (
        <div className={Style.Container}>
            <ul className={Style.NavBar}>
                <div className={Style.Logo}>
                    <li><a href="#profile" onClick={(e) => handleNavLinkClick(e, '#profile')}>Victor tattoo</a></li>
                </div>
                <div className={Style.Menu}>
                    <li><a href="#about" onClick={(e) => handleNavLinkClick(e, '#about')}>Sobre</a></li>
                    <li><a href="#gallery" onClick={(e) => handleNavLinkClick(e, '#gallery')}>Galeria</a></li>
                    <li><a href="#contact" onClick={(e) => handleNavLinkClick(e, '#contact')}>Contato</a></li>
                </div>
            </ul>
        </div>
    );
};

export default Navbar;
