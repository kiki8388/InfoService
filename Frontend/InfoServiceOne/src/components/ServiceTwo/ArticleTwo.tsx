import React, { FormEvent, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import "./ArticleTwo.css";
import axios from 'axios';
import { TextField, List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography } from '@mui/material';

interface ArticleData {
  id: string;
  title: string;
  content: string;
  category: string;
  author: string;
  views: number;
  comments: Array<CommentData>;
}

interface CommentData {
  id: string;
  author: string;
  content: string;
  postId: string;
  createdAt: string;
}

interface CreateCommentData {
  postId: string;
  author: string;
  content: string;
}

const ArticleTwo: React.FC = () => {
  const location = useLocation();
  const articleData = location.state as ArticleData;
  const navigate = useNavigate();
  const apiURL = "https://localhost:7083/api";

  const [errorMessage, setErrorMessage] = useState('');
  const [createCommentData, setCreateCommentData] = useState<CreateCommentData>({
    postId: articleData.id,
    author: "",
    content: ""
  });
  const [commentsData, setCommentsData] = useState<Array<CommentData>>([]);

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
    document.documentElement.style.setProperty('--commentsContainerColor', 'black');
    document.documentElement.style.setProperty('--commentsContainerBgColor', 'white')
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
    document.documentElement.style.setProperty('--commentsContainerColor', 'white');
    document.documentElement.style.setProperty('--commentsContainerBgColor', '#1E1E1E')
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
    document.documentElement.style.setProperty('--commentsContainerColor', 'black');
    document.documentElement.style.setProperty('--commentsContainerBgColor', 'white')
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
    document.documentElement.style.setProperty('--commentsContainerColor', 'black');
    document.documentElement.style.setProperty('--commentsContainerBgColor', 'white')
};

  const handleCreateComment = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`${apiURL}/Comment/Create`, createCommentData);
      handleComments();
      setCreateCommentData({
        postId: articleData.id,
        author: "",
        content: ""
      });
    } catch (error: any) {
      if (error.response) {
        console.log(error.response);
        setErrorMessage(error.response.data || "An error occurred");
      } else {
        console.log(`ERROR: ${error}`);
        setErrorMessage(error.message || "An error occurred");
      }
    }
  };

  const handleComments = async () => {
    setCommentsData([]);
    try {
      const response = await axios.get(`${apiURL}/Comment/GetComments/${articleData.id}`);
      setCommentsData(response.data);
    } catch (error: any) {
      if (error.response) {
        console.log(error.response);
        setErrorMessage(error.response.data || "An error occurred");
      } else {
        console.log(`ERROR: ${error}`);
        setErrorMessage(error.message || "An error occurred");
      }
    }
  }

  const formatDate = (dateTimeString: string): string => {

    const date = new Date(dateTimeString);
  
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
  
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
  
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  useEffect(() => {
    handleComments();
  }, []);

  return (
    <div className='containerTwoArt'>
      <header className='headerTwoArt'>
          <div className="logoTwoArt">
              <h1>InfoService</h1>
          </div>
          <footer className='footerTwoArt'>
            <div className='backButtonContainerTwoArt'>
              <Button className="backButton" variant='contained' onClick={() => navigate(-1)}>Back</Button>
            </div>
            <div className="colorButtonsTwoArt">
              <button onClick={chooseColorSchemeOne}>W</button>
              <button onClick={chooseColorSchemeTwo}>D</button>
              <button onClick={chooseColorSchemeThree}>P</button>
              <button onClick={chooseColorSchemeFour}>C</button>
            </div>
            <p>&copy; 2024 News Website. All rights reserved.</p>
          </footer>
      </header>
    
      <div className="articleContainerTwoArt">
        <h1>{articleData.title}</h1>
        <p>{articleData.content}</p>
        <div className='articleInfoTwoArt'>
          <p>Category: {articleData.category}</p>
          <p>Author: {articleData.author}</p>
          <p>Views: {articleData.views}</p>
        </div>
        <div className='addCommentContainerTwoArt'>
          <form onSubmit={handleCreateComment}>
            <TextField
              id='author'
              className='commentFormValue'
              label='Author'
              type='text'
              variant='outlined'
              required
              value={createCommentData.author}
              onChange={(e) => setCreateCommentData({ ...createCommentData, author: e.target.value })}
            />
            <TextField
              id='content'
              className='commentFormValue'
              label='Content'
              type='text'
              variant='outlined'
              required
              value={createCommentData.content}
              onChange={(e) => setCreateCommentData({ ...createCommentData, content: e.target.value })}
            />
            {errorMessage && (
              <p className="error"> {errorMessage} </p>
            )}
            <Button variant='contained' type='submit'>
              Comment
            </Button>
          </form>
        </div>
        <div className='commentsContainerTwoArt'>
          <h2>Comments</h2>
          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {commentsData.length === 0 ? (
              <p>No comments</p>
            ) : (
              commentsData.map((comment, index) => (
                <React.Fragment key={comment.id}>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar>{comment.author.charAt(0)}</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={comment.content}
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            {comment.author}
                          </Typography>
                          {` — ${formatDate(comment.createdAt)}`}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  {index < commentsData.length - 1 && <Divider variant="inset" component="li" />}
                </React.Fragment>
              ))
            )}
          </List>
        </div>
      </div>
    </div>
  );
};

export default ArticleTwo;
