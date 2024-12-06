import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import "./ArticleFour.css";

interface ArticleData {
  id: string;
  title: string;
  content: string;
  category: string;
  author: string;
  views: number;
}

const ArticleFour: React.FC = () => {
  const location = useLocation();
  const articleData = location.state as ArticleData;
  const navigate = useNavigate();

  const chooseColorSchemeOne = () => {
    document.documentElement.style.setProperty('--fontColor', 'black');
    document.documentElement.style.setProperty('--bgColor', 'white');
    document.documentElement.style.setProperty('--headerColor', 'white');
    document.documentElement.style.setProperty('--headerBgColor', '#333');
    document.documentElement.style.setProperty('--navButtonColor', 'white');
    document.documentElement.style.setProperty('--navButtonBgColor', '#333');
    document.documentElement.style.setProperty('--navButtonBgHoverColor', '#272727');
    document.documentElement.style.setProperty('--articleColor', 'black');
    document.documentElement.style.setProperty('--articleBgColor', '#f4f4f4');
    document.documentElement.style.setProperty('--articleBgHoverColor', '#f4f4f4');
    document.documentElement.style.setProperty('--footerColor', 'white');
    document.documentElement.style.setProperty('--footerBgColor', '#333');
    document.documentElement.style.setProperty('--articleContainerColor', 'black');
    document.documentElement.style.setProperty('--articleContainerBgColor', 'white');
    document.documentElement.style.setProperty('--backButtonColor', 'white');
    document.documentElement.style.setProperty('--backButtonBgColor', '#333');
    document.documentElement.style.setProperty('--backButtonBgHoverColor', '#272727');
  };

  const chooseColorSchemeTwo = () => {
    document.documentElement.style.setProperty('--fontColor', 'white');
    document.documentElement.style.setProperty('--bgColor', '#121212'); 
    document.documentElement.style.setProperty('--headerColor', '#BB86FC'); 
    document.documentElement.style.setProperty('--headerBgColor', '#1F1B24');
    document.documentElement.style.setProperty('--navButtonColor', '#BB86FC');
    document.documentElement.style.setProperty('--navButtonBgColor', '#333333'); 
    document.documentElement.style.setProperty('--navButtonBgHoverColor', '#424242');
    document.documentElement.style.setProperty('--articleColor', '#E0E0E0');
    document.documentElement.style.setProperty('--articleBgColor', '#1E1E1E');
    document.documentElement.style.setProperty('--articleBgHoverColor', '#292929');
    document.documentElement.style.setProperty('--footerColor', '#BB86FC'); 
    document.documentElement.style.setProperty('--footerBgColor', '#1F1B24');
    document.documentElement.style.setProperty('--articleContainerColor', '#E0E0E0');
    document.documentElement.style.setProperty('--articleContainerBgColor', '#1E1E1E');
    document.documentElement.style.setProperty('--backButtonColor', '#BB86FC');
    document.documentElement.style.setProperty('--backButtonBgColor', '#333333');
    document.documentElement.style.setProperty('--backButtonBgHoverColor', '#424242');
};

const chooseColorSchemeThree = () => {
    document.documentElement.style.setProperty('--fontColor', 'black');
    document.documentElement.style.setProperty('--bgColor', '#FAF3DD');
    document.documentElement.style.setProperty('--headerColor', '#F76C6C');
    document.documentElement.style.setProperty('--headerBgColor', '#355070');
    document.documentElement.style.setProperty('--navButtonColor', '#F76C6C');
    document.documentElement.style.setProperty('--navButtonBgColor', '#A1C181');
    document.documentElement.style.setProperty('--navButtonBgHoverColor', '#70A288');
    document.documentElement.style.setProperty('--articleColor', '#355070');
    document.documentElement.style.setProperty('--articleBgColor', '#FFFFFF');
    document.documentElement.style.setProperty('--articleBgHoverColor', '#EAEAEA');
    document.documentElement.style.setProperty('--footerColor', '#F76C6C');
    document.documentElement.style.setProperty('--footerBgColor', '#355070');
    document.documentElement.style.setProperty('--articleContainerColor', '#355070');
    document.documentElement.style.setProperty('--articleContainerBgColor', '#FFFFFF');
    document.documentElement.style.setProperty('--backButtonColor', '#F76C6C');
    document.documentElement.style.setProperty('--backButtonBgColor', '#A1C181');
    document.documentElement.style.setProperty('--backButtonBgHoverColor', '#70A288');
};

const chooseColorSchemeFour = () => {
    document.documentElement.style.setProperty('--fontColor', 'black');
    document.documentElement.style.setProperty('--bgColor', '#F7F9F9');
    document.documentElement.style.setProperty('--headerColor', '#FF6F59');
    document.documentElement.style.setProperty('--headerBgColor', '#22223B');
    document.documentElement.style.setProperty('--navButtonColor', '#4A90E2');
    document.documentElement.style.setProperty('--navButtonBgColor', '#FF6F59');
    document.documentElement.style.setProperty('--navButtonBgHoverColor', '#D7263D');
    document.documentElement.style.setProperty('--articleColor', '#22223B');
    document.documentElement.style.setProperty('--articleBgColor', '#FFFFFF');
    document.documentElement.style.setProperty('--articleBgHoverColor', '#FBEDE9');
    document.documentElement.style.setProperty('--footerColor', '#4A90E2');
    document.documentElement.style.setProperty('--footerBgColor', '#22223B');
    document.documentElement.style.setProperty('--articleContainerColor', '#22223B');
    document.documentElement.style.setProperty('--articleContainerBgColor', '#FFFFFF');
    document.documentElement.style.setProperty('--backButtonColor', '#4A90E2');
    document.documentElement.style.setProperty('--backButtonBgColor', '#FF6F59');
    document.documentElement.style.setProperty('--backButtonBgHoverColor', '#D7263D');
};

  return (
    <div className='containerFourArt'>
    <header className='headerFourArt'>
        <div className="logoFourArt">
            <h1>InfoService</h1>
        </div>
    </header>
    
      <div className="articleContainerFourArt">
        <h1>{articleData.title}</h1>
        <p>{articleData.content}</p>
        <p>Category: {articleData.category}</p>
        <p>Author: {articleData.author}</p>
        <p>Views: {articleData.views}</p>
      </div>
      <div className='backButtonContainerFourArt'>
          <Button className="backButton" variant='contained' onClick={() => navigate(-1)}>Back</Button>
      </div>
   
    <footer className='footerFourArt'>
      <div className="colorButtonsFourArt">
        <button onClick={chooseColorSchemeOne}>W</button>
        <button onClick={chooseColorSchemeTwo}>D</button>
        <button onClick={chooseColorSchemeThree}>P</button>
        <button onClick={chooseColorSchemeFour}>C</button>
      </div>
      <p>&copy; 2024 News Website. All rights reserved.</p>
    </footer>
    </div>
  );
};

export default ArticleFour;