import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import "./Article.css";

interface ArticleData {
  id: string;
  title: string;
  content: string;
  category: string;
  author: string;
  views: number;
}

const Article: React.FC = () => {
  const location = useLocation();
  const articleData = location.state as ArticleData;
  const navigate = useNavigate();

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
        <Button className="backButton" onClick={() => navigate(-1)} variant="contained">Back</Button>
    </div>
    </>
  );
};

export default Article;