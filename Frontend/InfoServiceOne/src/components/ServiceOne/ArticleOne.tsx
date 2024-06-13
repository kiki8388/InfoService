import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import "./ArticleOne.css";
import styled from 'styled-components';

interface ArticleData {
  id: string;
  title: string;
  content: string;
  category: string;
  author: string;
  views: number;
}

const ArticleOne: React.FC = () => {
  const location = useLocation();
  const articleData = location.state as ArticleData;
  const navigate = useNavigate();

  const [headerColor, setHeaderColor] = useState('#333333');
  const [footerColor, setFooterColor] = useState('#333333');
  const [buttonColor, setButtonColor] = useState('#333333');
  const [buttonHoverColor, setButtonHoverColor] = useState('#272727');

  const chooseColorSchemeOne = () => {
    setHeaderColor('#333333');
    setFooterColor('#333333');
    setButtonColor('#333333');
    setButtonHoverColor('#272727');
  };

  const chooseColorSchemeTwo = () => {
    setHeaderColor('#333333');
    setFooterColor('#333333');
    setButtonColor('#333333');
    setButtonHoverColor('#272727');
  };

  const chooseColorSchemeThree = () => {
    setHeaderColor('#333333');
    setFooterColor('#333333');
    setButtonColor('#333333');
    setButtonHoverColor('#272727');
  };

  const chooseColorSchemeFour = () => {
    setHeaderColor('#333333');
    setFooterColor('#333333');
    setButtonColor('#333333');
    setButtonHoverColor('#272727');
  };

  const StyledButton = styled(Button)`
    width: 15%;
    background-color: #333333;

    &:hover {
      background-color: #272727;
    }
  `;

  return (
    <>
    <header>
        <div className="logo">
            <h1>InfoService</h1>
        </div>
    </header>
    <div className="article-container">
      <h1>{articleData.title}</h1>
      <p>{articleData.content}</p>
      <p>Category: {articleData.category}</p>
      <p>Author: {articleData.author}</p>
      <p>Views: {articleData.views}</p>
    </div>
    <div className='backButtonContainer'>
        <StyledButton className="backButton" variant='contained' onClick={() => navigate(-1)}>Back</StyledButton>
    </div>
    <footer style={{ backgroundColor: footerColor }}>
      <div className="color-buttons">
        <button onClick={chooseColorSchemeOne}></button>
        <button onClick={chooseColorSchemeTwo}></button>
        <button onClick={chooseColorSchemeThree}></button>
        <button onClick={chooseColorSchemeFour}></button>
      </div>
      <p>&copy; 2024 News Website. All rights reserved.</p>
    </footer>
    </>
  );
};

export default ArticleOne;