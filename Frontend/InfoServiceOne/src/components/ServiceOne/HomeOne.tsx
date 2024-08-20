import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import "./HomeOne.css";

interface PostData {
  id: string;
  title: string;
  content: string;
  category: string;
  author: string;
  views: number;
}

const HomeOne: React.FC = () => {
  const apiURL = "https://localhost:7083/api";
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [visible, setVisible] = useState(false);
  const [postsData, setPostsData] = useState<Array<PostData>>([]);
  const [filteredPosts, setFilteredPosts] = useState<Array<PostData>>([]);

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
      setFilteredPosts(response.data); // Initialize filtered posts
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

  const filterPostsByCategory = (category: string) => {
    if (category === 'All') {
      setFilteredPosts(postsData);
    } else {
      setFilteredPosts(postsData.filter(post => post.category === category));
    }
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

  return (
    <div className='containerOne' style={{ backgroundColor: backgroundColor }}>
      <header className="headerOne" style={{ color: headerColor, backgroundColor: headerBackgroundColor }}>
        <div className="logoOne">
          <h1>InfoService</h1>
        </div>
        <nav className="filterButtonsOne">
          <button onClick={() => filterPostsByCategory('All')}>All</button>
          <button onClick={() => filterPostsByCategory('Sports')}>Sports</button>
          <button onClick={() => filterPostsByCategory('World')}>World</button>
          <button onClick={() => filterPostsByCategory('Politics')}>Politics</button>
          <button onClick={() => filterPostsByCategory('Business')}>Business</button>
          <button onClick={() => filterPostsByCategory('Technology')}>Technology</button>
          <button onClick={() => filterPostsByCategory('Arts')}>Arts</button>
          <button onClick={() => filterPostsByCategory('Opinion')}>Opinion</button>
        </nav>
      </header>
      <div className='headerNavOne' style={{ visibility: visible ? 'visible' : 'hidden', opacity: visible ? 1 : 0, color: headerColor, backgroundColor: headerBackgroundColor }}>
        <nav className='filterButtonsOne'>
          <button onClick={() => filterPostsByCategory('All')}>All</button>
          <button onClick={() => filterPostsByCategory('Sports')}>Sports</button>
          <button onClick={() => filterPostsByCategory('World')}>World</button>
          <button onClick={() => filterPostsByCategory('Politics')}>Politics</button>
          <button onClick={() => filterPostsByCategory('Business')}>Business</button>
          <button onClick={() => filterPostsByCategory('Technology')}>Technology</button>
          <button onClick={() => filterPostsByCategory('Arts')}>Arts</button>
          <button onClick={() => filterPostsByCategory('Opinion')}>Opinion</button>
        </nav>
      </div>
      <main className='mainOne'>
        <section className="otherArticlesOne">
          {errorMessage && <div className="errorMessage">{errorMessage}</div>}
          {filteredPosts.length === 0 ? (
            <div className="noArticlesOne">No articles</div>
          ) : (
            filteredPosts.map(post => (
              <article className='articleOne' style={{color: articleColor, backgroundColor: articleBackgroundColor}} key={post.id} onClick={() => handleArticleClick(post)}>
                <img src="https://via.placeholder.com/400x200" alt="Article Image" />
                <h3>{post.title}</h3>
                <p>{truncateContent(post.content, 20)}</p>
              </article>
            ))
          )}
        </section>
      </main>
      <footer className="footerOne" style={{ backgroundColor: footerBackgroundColor }}>
        <div className="colorButtonsOne">
          <button onClick={chooseColorSchemeOne}></button>
          <button onClick={chooseColorSchemeTwo}></button>
          <button onClick={chooseColorSchemeThree}></button>
          <button onClick={chooseColorSchemeFour}></button>
        </div>
        <p>&copy; 2024 News Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomeOne;
