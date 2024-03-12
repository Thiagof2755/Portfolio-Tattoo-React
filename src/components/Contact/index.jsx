import React from 'react'
import Style from './Contact.module.scss'
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className={Style.Container}>Contato
            <div className={Style.Local}>
                <h4>Brooklin, São Paulo - SP</h4>
                <p>Fale conosco direto pelo</p>
                <p>Whatsapp: (11) 99655-0605</p>
            </div>
            <div className={Style.Social}>
                <p>Confira também, trabalhos, depoimentos e dicas no Instagram</p>
                <h4><Link to="https://www.instagram.com/victortattoox/">Instagram</Link></h4>
            </div>
        </div>
    )
}

export default Contact