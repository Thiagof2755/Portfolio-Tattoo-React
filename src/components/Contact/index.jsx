import React from 'react'
import Style from './Contact.module.scss'
import { SiInstagram } from "react-icons/si";
import { SiWhatsapp } from "react-icons/si";
import { Link } from 'react-router-dom';


const Contact = () => {
    return (
        <div className={Style.Container}>
            <h2>Contato</h2>
            <h5 className={Style.h5}>_________________________________________________________</h5>
            <div className={Style.Box}>
                <div className={Style.Local}>
                    <h4><Link className={Style.h4} to='https://api.whatsapp.com/message/ZHZ2G2PR7DTVF1?autoload=1&app_absent=0'>
                        <SiWhatsapp />
                        <h4>Whatsapp</h4>
                    </Link>
                    </h4>
                    <p>Fale conosco direto pelo <br />
                    Whatsapp: (34) 991588532</p>
                </div>
                <div className={Style.Social}>
                    <h4><Link className={Style.h4} to='https://www.instagram.com/victortattoox/'>
                        <SiInstagram />
                        <h4>Instagram</h4>
                    </Link>
                    </h4>
                    <p>Confira também, trabalhos, depoimentos e dicas no Instagram</p>
                </div>
            </div>
        </div>
    )
}

export default Contact