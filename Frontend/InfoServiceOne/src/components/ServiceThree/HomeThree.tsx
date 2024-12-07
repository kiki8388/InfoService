import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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

  const [selectedPost, setSelectedPost] = useState<PostData | null>(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

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
  }, []);
  
  useEffect(() => {
    filterPostsByCategory();
  }, [postsData]);
  

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
      const updatedPost = { ...post, views: post.views + 1 };
      await axios.put(`${apiURL}/Post/UpdateViews/${post.id}`);
      setSelectedPost(updatedPost);
      setIsPopupVisible(true);
      
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

  const closePopup = () => {
    setIsPopupVisible(false);
    setSelectedPost(null);
  };

  const chooseColorSchemeOne = () => {
    document.documentElement.style.setProperty('--headerColor', 'white');
    document.documentElement.style.setProperty('--fontColor', 'black');
    document.documentElement.style.setProperty('--bgColor', 'white');
    document.documentElement.style.setProperty('--articleColor', 'black');
    document.documentElement.style.setProperty('--articleBgColor', '#f4f4f4');
    document.documentElement.style.setProperty('--articleBgHoverColor', '#b9b9b9');
    document.documentElement.style.setProperty('--footerColor', 'white');
    document.documentElement.style.setProperty('--footerBgColor', '#333333');
    document.documentElement.style.setProperty('--popupColor', 'black');
    document.documentElement.style.setProperty('--popupBgColor', 'white');
    document.documentElement.style.setProperty('--popupCloseColor', 'white');
    document.documentElement.style.setProperty('--popupCloseBgColor', '#333');
    document.documentElement.style.setProperty('--popupCloseBgHoverColor', '#272727');  
  };

  const chooseColorSchemeTwo = () => {
    document.documentElement.style.setProperty('--headerColor', '#BB86FC');
    document.documentElement.style.setProperty('--fontColor', 'white');
    document.documentElement.style.setProperty('--bgColor', '#121212'); 
    document.documentElement.style.setProperty('--articleColor', '#E0E0E0');
    document.documentElement.style.setProperty('--articleBgColor', '#1E1E1E');
    document.documentElement.style.setProperty('--articleBgHoverColor', '#292929');
    document.documentElement.style.setProperty('--footerColor', '#BB86FC');
    document.documentElement.style.setProperty('--footerBgColor', '#1F1B24');
    document.documentElement.style.setProperty('--popupColor', '#E0E0E0');
    document.documentElement.style.setProperty('--popupBgColor', '#1E1E1E');
    document.documentElement.style.setProperty('--popupCloseColor', '#BB86FC');
    document.documentElement.style.setProperty('--popupCloseBgColor', '#333333');
    document.documentElement.style.setProperty('--popupCloseBgHoverColor', '#424242');
};

const chooseColorSchemeThree = () => {
    document.documentElement.style.setProperty('--headerColor', '#F76C6C');
    document.documentElement.style.setProperty('--fontColor', 'black');
    document.documentElement.style.setProperty('--bgColor', '#FAF3DD');
    document.documentElement.style.setProperty('--articleColor', '#355070');
    document.documentElement.style.setProperty('--articleBgColor', '#FFFFFF');
    document.documentElement.style.setProperty('--articleBgHoverColor', '#EAEAEA');
    document.documentElement.style.setProperty('--footerColor', '#F76C6C');
    document.documentElement.style.setProperty('--footerBgColor', '#355070');
    document.documentElement.style.setProperty('--popupColor', '#355070');
    document.documentElement.style.setProperty('--popupBgColor', '#FFFFFF');
    document.documentElement.style.setProperty('--popupCloseColor', '#F76C6C');
    document.documentElement.style.setProperty('--popupCloseBgColor', '#A1C181');
    document.documentElement.style.setProperty('--popupCloseBgHoverColor', '#70A288');
};

const chooseColorSchemeFour = () => {
    document.documentElement.style.setProperty('--headerColor', '#FF6F59');
    document.documentElement.style.setProperty('--fontColor', 'black');
    document.documentElement.style.setProperty('--bgColor', '#F7F9F9'); 
    document.documentElement.style.setProperty('--articleColor', '#22223B');
    document.documentElement.style.setProperty('--articleBgColor', '#FFFFFF');
    document.documentElement.style.setProperty('--articleBgHoverColor', '#FBEDE9');
    document.documentElement.style.setProperty('--footerColor', '#4A90E2');
    document.documentElement.style.setProperty('--footerBgColor', '#22223B');
    document.documentElement.style.setProperty('--popupColor', '#22223B');
    document.documentElement.style.setProperty('--popupBgColor', '#FFFFFF');
    document.documentElement.style.setProperty('--popupCloseColor', '#4A90E2');
    document.documentElement.style.setProperty('--popupCloseBgColor', '#FF6F59');
    document.documentElement.style.setProperty('--popupCloseBgHoverColor', '#D7263D');
};

  return (
    <div className={`containerThree ${isPopupVisible ? 'blur-background' : ''}`}>
      {isPopupVisible && <div className="background-blur"></div>}
      <main className='mainThree'>
        <section className="otherArticlesThree">
          <div className='articleCategoryContainerThree'>
            <h1>Sports</h1>
            {errorMessage && <div className="errorMessage">{errorMessage}</div>}
            {sportsPosts.length === 0 ? (
              <div className="noArticlesThree">No articles</div>
            ) : (
              sportsPosts.map(post => (
                <article className='articleThree' key={post.id} onClick={() => handleArticleClick(post)}>
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
                <article className='articleThree' key={post.id} onClick={() => handleArticleClick(post)}>
                  <h3>{post.title}</h3>
                </article>
              ))
            )}
          </div>
          <div className='articleCategoryContainerThree'>
            <h1>Politics</h1>
            {errorMessage && <div className="errorMessage">{errorMessage}</div>}
            {politicsPosts.length === 0 ? (
              <div className="noArticlesThree">No articles</div>
            ) : (
              worldPosts.map(post => (
                <article className='articleThree' key={post.id} onClick={() => handleArticleClick(post)}>
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
                <article className='articleThree' key={post.id} onClick={() => handleArticleClick(post)}>
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
                <article className='articleThree' key={post.id} onClick={() => handleArticleClick(post)}>
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
                <article className='articleThree' key={post.id} onClick={() => handleArticleClick(post)}>
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
                <article className='articleThree' key={post.id} onClick={() => handleArticleClick(post)}>
                  <h3>{post.title}</h3>
                </article>
              ))
            )}
          </div>
        </section>
      </main>
      <footer className="footerThree">
        <div className="logoThree">
          <h2>InfoService</h2>
        </div>
        <p>&copy; 2024 News Website. All rights reserved.</p>
        <div className="colorButtonsThree">
          <button onClick={chooseColorSchemeOne}>W</button>
          <button onClick={chooseColorSchemeTwo}>D</button>
          <button onClick={chooseColorSchemeThree}>P</button>
          <button onClick={chooseColorSchemeFour}>C</button>
        </div>
      </footer>
      {isPopupVisible && selectedPost && (
      <div className="popup-overlay" onClick={closePopup}>
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
          <h1>{selectedPost.title}</h1>
          <p>{selectedPost.content}</p>
          <p>Category: {selectedPost.category}</p>
          <p>Author: {selectedPost.author}</p>
          <p>Views: {selectedPost.views}</p>
          <button className="close-popup" onClick={closePopup}>
            Close
          </button>
        </div>
      </div>
      )}
    </div>
  );
}

export default HomeThree;
