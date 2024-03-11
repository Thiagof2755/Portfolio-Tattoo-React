import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import AboutCard from './components/AboutCard';
import Gallery from './components/Gallery';


function App() {
    return (
        <div >
            <Navbar />
            <ProfileCard />
            <AboutCard />
            <Gallery/>
            
        </div>
    );
}

export default App;
