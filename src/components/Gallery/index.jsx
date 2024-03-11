import React from 'react';
import Style from './Gallery.module.scss';
import CardGallery from '../CardGalery';
import GoodofWar1 from './assets/GoodOFWar (2).jpg';
import Naturo from './assets/Naruto (3).jpg';
import Lobo from './assets/Lobo (2).jpg';
import Anjo from './assets/anjo.jpg';
import Corvo from './assets/corvo.jpg';
import Pokemon from './assets/pokemon.jpg';
import Raper from './assets/raper.jpg';
import Leao from './assets/leao.jpg';
import Samurai from './assets/samurai.jpg';
import Girasol from './assets/girasol.jpg';

const Gallery = () => {
    return (
        <div className={Style.Container}>
            <div className={Style.Box}>
                <h1>Galeria de Trabalhos</h1>
                <div className={Style.Cards}>
                    <CardGallery image={[GoodofWar1]} />
                    <CardGallery image={[Naturo]} />
                    <CardGallery image={[Lobo]} />
                    <CardGallery image={[Anjo]} />
                    <CardGallery image={[Corvo]} />
                    <CardGallery image={[Pokemon]} />
                    <CardGallery image={[Raper]} />
                    <CardGallery image={[Leao]} />
                    <CardGallery image={[Samurai]} />
                    <CardGallery image={[Girasol]} />
                </div>
            </div>
        </div>
    );
};

export default Gallery;
