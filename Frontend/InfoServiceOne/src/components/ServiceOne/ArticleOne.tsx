import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import "./ArticleOne.css";

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

  const chooseColorSchemeOne = () => {
    document.documentElement.style.setProperty('--bgColor', 'white');
    document.documentElement.style.setProperty('--headerColor', 'white');
    document.documentElement.style.setProperty('--headerBgColor', '#333333');
    document.documentElement.style.setProperty('--articleContainerColor', 'black');
    document.documentElement.style.setProperty('--articleContainerBgColor', 'white');
    document.documentElement.style.setProperty('--backButtonColor', 'white');
    document.documentElement.style.setProperty('--backButtonBgColor', '#333');
    document.documentElement.style.setProperty('--backButtonBgHoverColor', '#272727');
    document.documentElement.style.setProperty('--footerColor', 'white');
    document.documentElement.style.setProperty('--footerBgColor', '#333');
  };

  const chooseColorSchemeTwo = () => {
    document.documentElement.style.setProperty('--bgColor', 'black');
    document.documentElement.style.setProperty('--headerColor', 'black');
    document.documentElement.style.setProperty('--headerBgColor', '#272727');
    document.documentElement.style.setProperty('--articleContainerColor', 'white');
    document.documentElement.style.setProperty('--articleContainerBgColor', 'black');
    document.documentElement.style.setProperty('--backButtonColor', 'black');
    document.documentElement.style.setProperty('--backButtonBgColor', '#272727');
    document.documentElement.style.setProperty('--backButtonBgHoverColor', '#333');
    document.documentElement.style.setProperty('--footerColor', 'black');
    document.documentElement.style.setProperty('--footerBgColor', '#272727');
    document.documentElement.style.setProperty('--commentsContainerColor', 'white');
    document.documentElement.style.setProperty('--commentsContainerBgColor', 'black');
  };

  const chooseColorSchemeThree = () => {
    document.documentElement.style.setProperty('--bgColor', 'white');
    document.documentElement.style.setProperty('--headerColor', 'white');
    document.documentElement.style.setProperty('--headerBgColor', '#333333');
    document.documentElement.style.setProperty('--articleContainerColor', 'black');
    document.documentElement.style.setProperty('--articleContainerBgColor', 'white');
    document.documentElement.style.setProperty('--backButtonColor', 'white');
    document.documentElement.style.setProperty('--backButtonBgColor', '#333');
    document.documentElement.style.setProperty('--backButtonBgHoverColor', '#272727');
    document.documentElement.style.setProperty('--footerColor', 'white');
    document.documentElement.style.setProperty('--footerBgColor', '#333');
  };

  const chooseColorSchemeFour = () => {
    document.documentElement.style.setProperty('--bgColor', 'white');
    document.documentElement.style.setProperty('--headerColor', 'white');
    document.documentElement.style.setProperty('--headerBgColor', '#333333');
    document.documentElement.style.setProperty('--articleContainerColor', 'black');
    document.documentElement.style.setProperty('--articleContainerBgColor', 'white');
    document.documentElement.style.setProperty('--backButtonColor', 'white');
    document.documentElement.style.setProperty('--backButtonBgColor', '#333');
    document.documentElement.style.setProperty('--backButtonBgHoverColor', '#272727');
    document.documentElement.style.setProperty('--footerColor', 'white');
    document.documentElement.style.setProperty('--footerBgColor', '#333');
  };

  return (
    <div className='containerOneArt'>
    <header className='headerOneArt'>
        <div className="logoOneArt">
            <h1>InfoService</h1>
        </div>
    </header>
    
      <div className="articleContainerOneArt">
        <h1>{articleData.title}</h1>
        <p>{articleData.content}</p>
        <p>Category: {articleData.category}</p>
        <p>Author: {articleData.author}</p>
        <p>Views: {articleData.views}</p>
      </div>
      <div className='backButtonContainerOneArt'>
          <Button className="backButton" variant='contained' onClick={() => navigate(-1)}>Back</Button>
      </div>
   
    <footer className='footerOneArt'>
      <div className="colorButtonsOneArt">
        <button onClick={chooseColorSchemeOne}></button>
        <button onClick={chooseColorSchemeTwo}></button>
        <button onClick={chooseColorSchemeThree}></button>
        <button onClick={chooseColorSchemeFour}></button>
      </div>
      <p>&copy; 2024 News Website. All rights reserved.</p>
    </footer>
    </div>
  );
};

export default ArticleOne;