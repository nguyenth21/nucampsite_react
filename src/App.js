//import React from 'react';
import Header from './components/Header.js';
import CampsitesList from './features/campsites/CampsitesList.js';
import { CAMPSITES } from './app/shared/CAMPSITES';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div className='App'>
            <Header />
            <CampsitesList campsite={CAMPSITES[0]} />
            <Footer />
        </div>
    );
}

export default App;