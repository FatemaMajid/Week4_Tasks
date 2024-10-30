import React from "react";
import { Link , useLocation } from "react-router-dom";
import'./style.css';
import todo from '../assets/images/ToDo .png'

const Header = () => {
    const location = useLocation();

    return (
        
        <header className="header" >
            <div className="container">
                <div className="content">
                    <img src={todo} />
                    <div>
                        <Link to="/home.jsx" className={location.pathname === "/home.jsx" ? "active" : ""}>Home</Link>
                        <Link to="/" className={location.pathname === "/" ? "active" : ""}>About</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;