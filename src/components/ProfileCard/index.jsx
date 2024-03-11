import React from 'react'
import Style from './ProfileCard.module.scss'
import BGrider from './assets/BGrider.png'

const ProfileCard = () => {
    return (
        <div className={Style.Container}>
                <img src={BGrider} alt="" />
            <div>
                <div className={Style.Content}>
                    <h1>Victor Alerrandro</h1>
                    <h2>Desvando o mistério por trás de cada obra, onde a tinta conta histórias únicas.</h2>
                </div>
            </div>
        </div>
    )
}


export default ProfileCard