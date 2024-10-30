import React from 'react';
import { Link } from "react-router-dom";
import './style.css'
import img1 from '../assets/images/img1.png'

const About = () => {
    return (
        <div>
            <main>
                <div className="container">
                    <h1 className="title">Welcome.</h1>
                    <p className="sub-title">This is my first challenge with Html&CSS.</p>
                    <div className="middle">
                        <img src={img1} />
                    </div>
                </div>
            </main>
            <footer>
                <div className="container">
                    <p className="footer-p">This App is created by <span>Aon 2023</span></p>
                </div>
            </footer>
        </div>
    );
};

export default About;