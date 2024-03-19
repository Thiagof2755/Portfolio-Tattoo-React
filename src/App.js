import React, { useEffect } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard'; // Importe o componente ProfileCard
import AboutCard from './components/AboutCard';
import Gallery from './components/Gallery';
import Style from './App.module.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollReveal from 'scrollreveal';

function App() {
    useEffect(() => {
        const sr = ScrollReveal({ 
            reset: true,
            duration: 1000, // Defina a duração padrão para 1000ms
            distance: '1px', // Define a distância padrão para 20px
            delay: 0, // Sem atraso padrão
            opacity: 0, // Opacidade inicial padrão de 0
            scale: 1, // Escala inicial padrão de 1
            easing: 'ease', // Tipo de easing padrão
        });
    
        sr.reveal('.SessionOne', {
            origin: 'bottom',
        });
        sr.reveal('.SessionTwo', {
            origin: 'bottom',
            delay: 200, // Adiciona um pequeno atraso para dar uma sensação de continuidade
        });
        sr.reveal('.SessionThree', {
            origin: 'bottom',
            delay: 400, // Aumenta o atraso para uma sensação mais progressiva
        });
        sr.reveal('.SessionFour', {
            origin: 'bottom',
            delay: 600, // Aumenta o atraso novamente
        });
        sr.reveal('.SessionFive', {
            origin: 'bottom',
            delay: 100, // Aumenta o atraso novamente
        });
    }, []);
    

    return (
        <div className={Style.App}>
            <Navbar />
            <div>
                <div id ="profile" className={`SessionOne ${Style.SessionOne}`}>
                    <ProfileCard /> {/* Adicione o componente ProfileCard aqui */}
                </div>
                <div id="about" className={`SessionTwo ${Style.SessionTwo}`}>
                    <AboutCard />
                </div>
                <div id="gallery" className={`SessionThree ${Style.SessionThree}`}>
                    <Gallery />
                </div>
                <div id="contact" className={`SessionFour ${Style.SessionFour}`}>
                    <Contact />
                </div>
                <div id="footer" className={`SessionFive ${Style.SessionFive}`}>
                    <Footer />
                </div>

            </div>
        </div>
    );
}

export default App;
