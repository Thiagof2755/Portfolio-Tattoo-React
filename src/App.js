import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import AboutCard from './components/AboutCard';


function App() {
    return (
        <div >
            <Navbar />
            <ProfileCard />
            <AboutCard />
            
        </div>
    );
}

export default App;
