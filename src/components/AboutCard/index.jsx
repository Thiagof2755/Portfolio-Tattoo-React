import React from 'react';
import Style from './About.module.scss';
import Video from './assets/Movie.mp4';

const AboutCard = () => {
    return (
        <div className={Style.Box}>
        <div className={Style.Container}>
<div className={Style.About}>
    <div className={Style.Title}>
        <h1>Victor Alerrandro: O Mestre Tatuador de Uberlândia</h1>
        <p>Seja bem-vindo ao mundo da arte na pele! Conheça Victor Alerrandro.</p>
    </div>
    <div className={Style.Content}>
        <h2>Paixão pela Arte</h2>
        <p>Victor Alerrandro é um renomado tatuador de Uberlândia, cuja paixão pela arte começou na infância e o levou a explorar diversas formas de expressão, até encontrar sua verdadeira vocação na tatuagem. Com anos de experiência e dedicação, ele desenvolveu um estilo único e uma abordagem personalizada para cada cliente, criando obras de arte que transcendem a mera estética. Além de seu talento como tatuador, Victor é ativo em sua comunidade, contribuindo para projetos de arte comunitária e eventos de caridade, demonstrando seu compromisso com a arte e com o bem-estar da comunidade local.</p>
    </div>
</div>

            <div className={Style.Movie}>
                <div className={Style.Right}>
                    <div className={Style.button}>
                    <video autoPlay muted loop>
                        <source src={Video} type="video/mp4" />
                    </video>
                </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AboutCard;
