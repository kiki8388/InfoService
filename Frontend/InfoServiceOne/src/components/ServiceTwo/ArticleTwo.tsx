import React, { FormEvent, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import "./ArticleTwo.css";
import { styled } from '@mui/system';
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
  const [errorMessage, setErrorMessage] = useState('');
  const [createCommentData, setCreateCommentData] = useState<CreateCommentData>({
    postId: articleData.id,
    author: "",
    content: ""
  });
  const [commentsData, setCommentsData] = useState<Array<CommentData>>([]);

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
        <div className='articleInfoTwoArt'>
          <p>Category: {articleData.category}</p>
          <p>Author: {articleData.author}</p>
          <p>Views: {articleData.views}</p>
        </div>
        <div className='addCommentContainerTwoArt'>
          <form onSubmit={handleCreateComment}>
            <TextField
              id='author'
              label='Author'
              type='text'
              variant='outlined'
              required
              value={createCommentData.author}
              onChange={(e) => setCreateCommentData({ ...createCommentData, author: e.target.value })}
            />
            <TextField
              id='content'
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
            <StyledButton variant='contained' type='submit'>
              Comment
            </StyledButton>
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
