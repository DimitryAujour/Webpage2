import React from "react";
import LeftArrow from './logos/LeftArrow.png'; // Adjust the path
import Home from './logos/home.png'; // Adjust the path
import RightArrow from './logos/RightArrow.png';
import styled from "styled-components"; // Adjust the path

export default function Footer({ setActiveComponent }) {

    const StyledImage = styled.img`
  width: 50px; 
  height: auto; 
    padding: 30px;
`;
    const handleLeftClick = () => {
        // Logic to determine the previous component
        // For simplicity, we'll just go back to 'home'
        setActiveComponent('home');
    };

    const handleHomeClick = () => {
        setActiveComponent('home');
    };
    const handleRightClick = () => {
        // Logic to determine the next component
        // For simplicity, we'll just go to 'newSection'
        setActiveComponent('newSection');
    };

    return (
        <div className="footer">
            <div className="footer__container">
                <StyledImage src={LeftArrow} alt="Left Arrow" onClick={handleLeftClick} />
                <StyledImage src={Home} alt="Home" onClick={handleHomeClick} />
                <StyledImage src={RightArrow} alt="Right Arrow" onClick={handleRightClick} />
            </div>
        </div>
    );
}
