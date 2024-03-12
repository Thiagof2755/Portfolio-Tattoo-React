import React, { useEffect } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import AboutCard from './components/AboutCard';
import Gallery from './components/Gallery';
import Style from './App.module.css';
import Contact from './components/Contact';
import ScrollReveal from 'scrollreveal';

function App() {
    useEffect(() => {
        const sr = ScrollReveal({ reset: true });

        sr.reveal('.SessionOne', {
            duration: 1000,
            distance: '100px',
            origin: 'bottom',
        });
        sr.reveal('.SessionTwo', { duration: 1500 });
        sr.reveal('.SessionThree', { duration: 2000, rotate: { x: 0, y: 80, z: 0 } });
        sr.reveal('.SessionFour', {
            duration: 2000,
            distance: '100px',
            origin: 'bottom',
        });
        sr.reveal('.SessionFive', {
            origin: 'bottom',
            distance: '20px',
            duration: 1000,
            delay: 0,
            opacity: 0,
            scale: 0.8,
            easing: 'ease',
        });
    }, []);

    return (
        <div className={Style.App}>
            <Navbar />
            <div>
                <div className={`SessionOne ${Style.SessionOne}`}>
                    <ProfileCard />
                </div>
                <div className={`SessionTwo ${Style.SessionTwo}`}>
                    <AboutCard />
                </div>
                <div className={`SessionThree ${Style.SessionThree}`}>
                    <Gallery />
                </div>
                <div className={`SessionFour ${Style.SessionFour}`}>
                    <Contact />
                </div>
            </div>
        </div>
    );
}

export default App;
