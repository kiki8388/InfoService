import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import "./HomeThree.css";

interface PostData {
  id: string;
  title: string;
  content: string;
  category: string;
  author: string;
  views: number;
}

const HomeThree: React.FC = () => {
  const apiURL = "https://localhost:7083/api";
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [visible, setVisible] = useState(false);
  const [postsData, setPostsData] = useState<Array<PostData>>([]);
  const [sportsPosts, setSportsPosts] = useState<Array<PostData>>([]);
  const [worldPosts, setWorldPosts] = useState<Array<PostData>>([]);
  const [politicsPosts, setPoliticsPosts] = useState<Array<PostData>>([]);
  const [businessPosts, setBusinessPosts] = useState<Array<PostData>>([]);
  const [technologyPosts, setTechnologyPosts] = useState<Array<PostData>>([]);
  const [artsPosts, setArtsPosts] = useState<Array<PostData>>([]);
  const [opinionPosts, setOpinionPosts] = useState<Array<PostData>>([]);

  // State for managing colors
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [headerColor, setHeaderColor] = useState('white');
  const [headerBackgroundColor, setHeaderBackgroundColor] = useState('#333333');
  const [navButtonColor, setNavButtonColor] = useState('white');
  const [navButtonBackgroundColor, setNavButtonBackgroundColor] = useState('#333333');
  const [navButtonHoverColor, setNavButtonHoverColor] = useState('#272727');
  const [articleColor, setArticleColor] = useState('black');
  const [articleBackgroundColor, setArticleBackgroundColor] = useState('#f4f4f4');
  const [footerColor, setFooterColor] = useState('white');
  const [footerBackgroundColor, setFooterBackgroundColor] = useState('#333333');

  const handlePosts = async () => {
    setPostsData([]);
    try {
      const response = await axios.get(`${apiURL}/Post/GetAll`);
      setPostsData(response.data);
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

  useEffect(() => {
    handlePosts();
    filterPostsByCategory();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const filterPostsByCategory = () => {
    setSportsPosts(postsData.filter(post => post.category === 'Sports'));
    setWorldPosts(postsData.filter(post => post.category === 'World'));
    setPoliticsPosts(postsData.filter(post => post.category === 'Politics'));
    setBusinessPosts(postsData.filter(post => post.category === 'Business'));
    setTechnologyPosts(postsData.filter(post => post.category === 'Technology'));
    setArtsPosts(postsData.filter(post => post.category === 'Arts'));
    setOpinionPosts(postsData.filter(post => post.category === 'Opinion'));
  };

  const handleArticleClick = async (post: PostData) => {
    try {
      // Increment the view count
      const updatedPost = { ...post, views: post.views + 1 };
      await axios.put(`${apiURL}/Post/UpdateViews/${post.id}`);

      // Navigate to the article page
      navigate(`article`, { state: updatedPost });
    } catch (error: any) {
      if (error.response) {
        console.log(error.response);
        setErrorMessage(error.response.data);
      } else {
        console.log(`ERROR: ${error}`);
        setErrorMessage(error.message);
      }
    }
  };

  const truncateContent = (content: string, wordLimit: number) => {
    const words = content.split(' ');
    if (words.length <= wordLimit) {
      return content;
    }
    return words.slice(0, wordLimit).join(' ') + '...';
  };

  const chooseColorSchemeOne = () => {
    setBackgroundColor('white');
    setHeaderColor('white');
    setHeaderBackgroundColor('#333333');
    setNavButtonColor('white');
    setNavButtonBackgroundColor('#333333');
    setNavButtonHoverColor('#272727');
    setArticleColor('black');
    setArticleBackgroundColor('#f4f4f4');
    setFooterColor('white');
    setFooterBackgroundColor('#333333');
  };

  const chooseColorSchemeTwo = () => {
    setBackgroundColor('white');
    setHeaderColor('white');
    setHeaderBackgroundColor('#333333');
    setNavButtonColor('white');
    setNavButtonBackgroundColor('#333333');
    setNavButtonHoverColor('#272727');
    setArticleColor('black');
    setArticleBackgroundColor('#f4f4f4');
    setFooterColor('white');
    setFooterBackgroundColor('#333333');
  };

  const chooseColorSchemeThree = () => {
    setBackgroundColor('white');
    setHeaderColor('white');
    setHeaderBackgroundColor('#333333');
    setNavButtonColor('white');
    setNavButtonBackgroundColor('#333333');
    setNavButtonHoverColor('#272727');
    setArticleColor('black');
    setArticleBackgroundColor('#f4f4f4');
    setFooterColor('white');
    setFooterBackgroundColor('#333333');
  };

  const chooseColorSchemeFour = () => {
    setBackgroundColor('white');
    setHeaderColor('white');
    setHeaderBackgroundColor('#333333');
    setNavButtonColor('white');
    setNavButtonBackgroundColor('#333333');
    setNavButtonHoverColor('#272727');
    setArticleColor('black');
    setArticleBackgroundColor('#f4f4f4');
    setFooterColor('white');
    setFooterBackgroundColor('#333333');
  };

  const FilterButton = styled.button<{}>`
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    font-size: 16px;
    transition: background-color 0.3s;
    color: white;
    background-color: ${navButtonBackgroundColor};

    &:hover {
      background-color: ${navButtonHoverColor};
    }
  `;

  return (
    <div className='containerThree' style={{ backgroundColor: backgroundColor }}>
      <main className='mainThree'>
        <section className="otherArticlesThree">
          <div className='articleCategoryContainerThree'>
            <h1>Sports</h1>
            {errorMessage && <div className="errorMessage">{errorMessage}</div>}
            {sportsPosts.length === 0 ? (
              <div className="noArticlesThree">No articles</div>
            ) : (
              sportsPosts.map(post => (
                <article className='articleThree' style={{color: articleColor, backgroundColor: articleBackgroundColor}} key={post.id} onClick={() => handleArticleClick(post)}>
                  <h3>{post.title}</h3>
                </article>
              ))
            )}
          </div>
          <div className='articleCategoryContainerThree'>
            <h1>World</h1>
            {errorMessage && <div className="errorMessage">{errorMessage}</div>}
            {worldPosts.length === 0 ? (
              <div className="noArticlesThree">No articles</div>
            ) : (
              worldPosts.map(post => (
                <article className='articleThree' style={{color: articleColor, backgroundColor: articleBackgroundColor}} key={post.id} onClick={() => handleArticleClick(post)}>
                  <h3>{post.title}</h3>
                </article>
              ))
            )}
          </div>
          <div className='articleCategoryContainerThree'>
            <h1>Politics</h1>
            {errorMessage && <div className="errorMessage">{errorMessage}</div>}
            {worldPosts.length === 0 ? (
              <div className="noArticlesThree">No articles</div>
            ) : (
              worldPosts.map(post => (
                <article className='articleThree' style={{color: articleColor, backgroundColor: articleBackgroundColor}} key={post.id} onClick={() => handleArticleClick(post)}>
                  <h3>{post.title}</h3>
                </article>
              ))
            )}
          </div>
          <div className='articleCategoryContainerThree'>
            <h1>Business</h1>
            {errorMessage && <div className="errorMessage">{errorMessage}</div>}
            {businessPosts.length === 0 ? (
              <div className="noArticlesThree">No articles</div>
            ) : (
              businessPosts.map(post => (
                <article className='articleThree' style={{color: articleColor, backgroundColor: articleBackgroundColor}} key={post.id} onClick={() => handleArticleClick(post)}>
                  <h3>{post.title}</h3>
                </article>
              ))
            )}
          </div>
          <div className='articleCategoryContainerThree'>
            <h1>Technology</h1>
            {errorMessage && <div className="errorMessage">{errorMessage}</div>}
            {technologyPosts.length === 0 ? (
              <div className="noArticlesThree">No articles</div>
            ) : (
              technologyPosts.map(post => (
                <article className='articleThree' style={{color: articleColor, backgroundColor: articleBackgroundColor}} key={post.id} onClick={() => handleArticleClick(post)}>
                  <h3>{post.title}</h3>
                </article>
              ))
            )}
          </div>
          <div className='articleCategoryContainerThree'>
            <h1>Arts</h1>
            {errorMessage && <div className="errorMessage">{errorMessage}</div>}
            {artsPosts.length === 0 ? (
              <div className="noArticlesThree">No articles</div>
            ) : (
              artsPosts.map(post => (
                <article className='articleThree' style={{color: articleColor, backgroundColor: articleBackgroundColor}} key={post.id} onClick={() => handleArticleClick(post)}>
                  <h3>{post.title}</h3>
                </article>
              ))
            )}
          </div>
          <div className='articleCategoryContainerThree'>
            <h1>Opinion</h1>
            {errorMessage && <div className="errorMessage">{errorMessage}</div>}
            {opinionPosts.length === 0 ? (
              <div className="noArticlesThree">No articles</div>
            ) : (
              opinionPosts.map(post => (
                <article className='articleThree' style={{color: articleColor, backgroundColor: articleBackgroundColor}} key={post.id} onClick={() => handleArticleClick(post)}>
                  <h3>{post.title}</h3>
                </article>
              ))
            )}
          </div>
        </section>
      </main>
      <footer className="footerThree" style={{ backgroundColor: footerBackgroundColor }}>
        <div className="logoThree">
          <h2>InfoService</h2>
        </div>
        <p>&copy; 2024 News Website. All rights reserved.</p>
        <div className="colorButtonsThree">
          <button onClick={chooseColorSchemeOne}></button>
          <button onClick={chooseColorSchemeTwo}></button>
          <button onClick={chooseColorSchemeThree}></button>
          <button onClick={chooseColorSchemeFour}></button>
        </div>
      </footer>
    </div>
  );
}

export default HomeThree;
