import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/home.jsx" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;