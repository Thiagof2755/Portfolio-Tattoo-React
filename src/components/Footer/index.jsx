import React from 'react';
import Style from './Footer.module.scss';
import { SiWhatsapp, SiInstagram, SiLinkedin } from "react-icons/si";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className={Style.Footer}>
            <div className={Style.Box}>
                <div className={Style.Contact}>
                    <h3>Entre em Contato com o Desenvolvedor</h3>
                    <p>Thiago Alves</p>
                    <p>Email: thiagoadeveloper@gmail.com</p>
                    <p>Telefone: (34) 99762-8585</p>
                </div>
                <div className={Style.Media}>
                    <h3>Redes Sociais</h3>

                    <Link className={Style.Link} to='https://api.whatsapp.com/send/?phone=5534997628585&text&type=phone_number&app_absent=0'>
                        <SiWhatsapp />
                        <p>Whatsapp</p>
                    </Link>
                    <Link className={Style.Link} to='https://www.instagram.com/thiagoadev/'>
                        <SiInstagram />
                        <p>Instagram</p>
                    </Link>
                    <Link className={Style.Link} to='https://www.linkedin.com/in/thiago-alves-396108209/'>
                        <SiLinkedin/>
                        <p>Linkedin</p>
                    </Link>
                </div>
            </div>
                <p className={Style.Copyright}>Copyright © 2024. Todos os Direitos Reservados.</p>
        </footer>
    );
}

export default Footer;
