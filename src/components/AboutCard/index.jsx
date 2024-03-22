import React from 'react';
import Style from './About.module.scss';
import Video from './assets/Movie.mp4';

const AboutCard = () => {
    return (
        <div className={Style.Box}>
        <div className={Style.Container}>
<div className={Style.About}>
    <div className={Style.Title}>
        <h1>Victor Alerrandro: Tatuador de Uberlândia</h1>
        <p>Seja bem-vindo ao mundo da arte na pele! Conheça Victor Alerrandro.</p>
    </div>
    <div className={Style.Content}>
        <p>Victor Alerrandro é um tatuador excepcional de Uberlândia, cuja jornada artística começou na infância e o levou a explorar uma variedade de formas de expressão. Desde cedo, encontrou sua paixão na tatuagem, uma forma de arte que combina sua habilidade técnica com suas inspirações nas suas obras preferidas da cultura geek, como filmes, séries e animes. Além de seu talento como tatuador, Victor é um membro ativo de sua comunidade, contribuindo para projetos de arte e demonstrando seu compromisso tanto com a arte autoral quanto com outras formas de expressão artística.</p>
    </div>
</div>

            <div className={Style.Movie}>
                <div className={Style.Right}>
                    <div className={Style.button}>
                    <video autoPlay muted loop playsInline> 
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
