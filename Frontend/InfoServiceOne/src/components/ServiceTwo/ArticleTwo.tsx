import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import "./ArticleTwo.css";
import { styled } from '@mui/system';

interface ArticleData {
  id: string;
  title: string;
  content: string;
  category: string;
  author: string;
  views: number;
}

const ArticleTwo: React.FC = () => {
  const location = useLocation();
  const articleData = location.state as ArticleData;
  const navigate = useNavigate();

  const [backgroundColor, setBackgroundColor] = useState('white');
  const [headerColor, setHeaderColor] = useState('white');
  const [headerBackgroundColor, setHeaderBackgroundColor] = useState('#333333');
  const [articleContainerColor, setArticleContainerColor] = useState('black');
  const [articleContainerBackgroundColor, setArticleContainerBackgroundColor] = useState('white');
  const [backButtonColor, setBackButtonColor] = useState('white');
  const [backButtonBackgroundColor, setBackButtonBackgroundColor] = useState('#333333');
  const [backButtonHoverColor, setBackButtonHoverColor] = useState('#272727');
  const [footerColor, setFooterColor] = useState('white');
  const [footerBackgroundColor, setFooterBackgroundColor] = useState('#333333');

  const chooseColorSchemeOne = () => {
    setBackgroundColor('white');
    setHeaderColor('white');
    setHeaderBackgroundColor('#333333');
    setArticleContainerColor('black');
    setArticleContainerBackgroundColor('white');
    setBackButtonColor('white');
    setBackButtonBackgroundColor('#333333');
    setBackButtonHoverColor('#272727');
    setFooterColor('white');
    setFooterBackgroundColor('#333333');
  };

  const chooseColorSchemeTwo = () => {
    setBackgroundColor('white');
    setHeaderColor('white');
    setHeaderBackgroundColor('#333333');
    setArticleContainerColor('black');
    setArticleContainerBackgroundColor('white');
    setBackButtonColor('white');
    setBackButtonBackgroundColor('#333333');
    setBackButtonHoverColor('#272727');
    setFooterColor('white');
    setFooterBackgroundColor('#333333');
  };

  const chooseColorSchemeThree = () => {
    setBackgroundColor('white');
    setHeaderColor('white');
    setHeaderBackgroundColor('#333333');
    setArticleContainerColor('black');
    setArticleContainerBackgroundColor('white');
    setBackButtonColor('white');
    setBackButtonBackgroundColor('#333333');
    setBackButtonHoverColor('#272727');
    setFooterColor('white');
    setFooterBackgroundColor('#333333');
  };

  const chooseColorSchemeFour = () => {
    setBackgroundColor('white');
    setHeaderColor('white');
    setHeaderBackgroundColor('#333333');
    setArticleContainerColor('black');
    setArticleContainerBackgroundColor('white');
    setBackButtonColor('white');
    setBackButtonBackgroundColor('#333333');
    setBackButtonHoverColor('#272727');
    setFooterColor('white');
    setFooterBackgroundColor('#333333');
  };

  const StyledButton = styled(Button)`
    width: 100%;
    background-color: ${backButtonBackgroundColor};

    &:hover {
      background-color: ${backButtonHoverColor};
    }
  `;

  return (
    <div className='containerTwoArt' style={{backgroundColor: backgroundColor}}>
      <header className='headerTwoArt'>
          <div className="logoTwoArt">
              <h1>InfoService</h1>
          </div>
          <footer className='footerTwoArt' style={{ backgroundColor: footerBackgroundColor }}>
            <div className='backButtonContainerTwoArt'>
              <StyledButton className="backButton" variant='contained' onClick={() => navigate(-1)}>Back</StyledButton>
            </div>
            <div className="colorButtonsTwoArt">
              <button onClick={chooseColorSchemeOne}></button>
              <button onClick={chooseColorSchemeTwo}></button>
              <button onClick={chooseColorSchemeThree}></button>
              <button onClick={chooseColorSchemeFour}></button>
            </div>
            <p>&copy; 2024 News Website. All rights reserved.</p>
          </footer>
      </header>
    
      <div className="articleContainerTwoArt">
        <h1>{articleData.title}</h1>
        <p>{articleData.content}</p>
        <p>Category: {articleData.category}</p>
        <p>Author: {articleData.author}</p>
        <p>Views: {articleData.views}</p>
      </div>
    </div>
  );
};

export default ArticleTwo;