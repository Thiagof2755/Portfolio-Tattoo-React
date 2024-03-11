import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App'; // Importe o componente principal
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </Router>
    </React.StrictMode>
);


