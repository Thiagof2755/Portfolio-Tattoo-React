import React from 'react'
import Style from './Contact.module.scss'
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className={Style.Container}>
            <h2>Contato</h2>
            <h5>_________________________________________________________</h5>
            <div className={Style.Box}>
                <div className={Style.Local}>
                    <h4 className={Style.h4}>Brooklin, São Paulo - SP</h4>
                    <p>Fale conosco direto pelo</p>
                    <p>Whatsapp: (11) 99655-0605</p>
                </div>
                <div className={Style.Social}>
                    <h4 ><Link className={Style.h4} to="https://www.instagram.com/victortattoox/">Instagram</Link></h4>
                    <p>Confira também, trabalhos, depoimentos e dicas no Instagram</p>
                </div>
            </div>
        </div>
    )
}

export default Contact