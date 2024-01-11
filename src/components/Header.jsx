import React, { useState } from 'react';

const Header = () => {

    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const handleClick = () => {
        const currentButton = () => document.getElementsByClassName('current').style('color: blue')
        setIsButtonClicked(isButtonClicked);
        currentButton();
    };

    return (
        <nav className="navbar navbar-expand-lg bg-gray-800 navbar-light p-0">
            <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                <h2 className="m-0 text-gray">Josiah Smith</h2>
            </a>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <a href="/About" className="nav-item nav-link" onClick={handleClick} style={{ color: isButtonClicked ? 'blue' : '' }}>About</a>
                    <a href="/Project" className="nav-item nav-link" onClick={handleClick} style={{ color: isButtonClicked ? 'blue' : '' }}>Projects</a>
                    <a href="/Contact" className="nav-item nav-link" onClick={handleClick} style={{ color: isButtonClicked ? 'blue' : '' }}>Contact</a>
                    <a href="/Resume" className="nav-item nav-link" onClick={handleClick} style={{ color: isButtonClicked ? 'blue' : '' }}>Resume</a>
                </div>
            </div>
        </nav>
    )
};

export default Header;