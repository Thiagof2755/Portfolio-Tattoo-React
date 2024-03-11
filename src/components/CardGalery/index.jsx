import React from 'react';
import Style from './CardGallery.module.scss';

const CardGallery = ({ image }) => {
    return (
        <div className={Style.Container}>
            <div className={Style.Card}>
                <img src={image} alt={`Trabalho`} />
            </div>
        </div>
    );
};

export default CardGallery;
