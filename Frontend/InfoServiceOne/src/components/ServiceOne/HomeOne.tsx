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
  const [backgroundColor, setBackgroundColor] = useState('#FFF');
  const [headerColor, setHeaderColor] = useState('#333333');
  const [footerColor, setFooterColor] = useState('#333333');
  const [buttonColor, setButtonColor] = useState('#333333');
  const [buttonHoverColor, setButtonHoverColor] = useState('#272727');

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
    setBackgroundColor('#FFF');
    setHeaderColor('#333333');
    setFooterColor('#333333');
    setButtonColor('#333333');
    setButtonHoverColor('#272727');
  };

  const chooseColorSchemeTwo = () => {
    setBackgroundColor('#333333');
    setHeaderColor('#333333');
    setFooterColor('#333333');
    setButtonColor('#333333');
    setButtonHoverColor('#272727');
  };

  const chooseColorSchemeThree = () => {
    setBackgroundColor('#FFF');
    setHeaderColor('#333333');
    setFooterColor('#333333');
    setButtonColor('#333333');
    setButtonHoverColor('#272727');
  };

  const chooseColorSchemeFour = () => {
    setBackgroundColor('#FFF');
    setHeaderColor('#333333');
    setFooterColor('#333333');
    setButtonColor('#333333');
    setButtonHoverColor('#272727');
  };

  const FilterButton = styled.button<{}>`
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    font-size: 16px;
    transition: background-color 0.3s;
    color: white;
    background-color: ${buttonColor};

    &:hover {
      background-color: ${buttonHoverColor};
    }
  `;

  return (
    <div className='container' style={{ backgroundColor: backgroundColor }}>
      <header style={{ backgroundColor: headerColor }}>
        <div className="logo">
          <h1>InfoService</h1>
        </div>
        <nav className="filter-buttons">
          <FilterButton onClick={() => filterPostsByCategory('All')}>All</FilterButton>
          <FilterButton onClick={() => filterPostsByCategory('Sports')}>Sports</FilterButton>
          <FilterButton onClick={() => filterPostsByCategory('World')}>World</FilterButton>
          <FilterButton onClick={() => filterPostsByCategory('Politics')}>Politics</FilterButton>
          <FilterButton onClick={() => filterPostsByCategory('Business')}>Business</FilterButton>
          <FilterButton onClick={() => filterPostsByCategory('Technology')}>Technology</FilterButton>
          <FilterButton onClick={() => filterPostsByCategory('Arts')}>Arts</FilterButton>
          <FilterButton onClick={() => filterPostsByCategory('Opinion')}>Opinion</FilterButton>
        </nav>
      </header>
      <div className='headerNav' style={{ visibility: visible ? 'visible' : 'hidden', opacity: visible ? 1 : 0, backgroundColor: headerColor }}>
        <nav className='filter-buttons'>
          <FilterButton onClick={() => filterPostsByCategory('All')}>All</FilterButton>
          <FilterButton onClick={() => filterPostsByCategory('Sports')}>Sports</FilterButton>
          <FilterButton onClick={() => filterPostsByCategory('World')}>World</FilterButton>
          <FilterButton onClick={() => filterPostsByCategory('Politics')}>Politics</FilterButton>
          <FilterButton onClick={() => filterPostsByCategory('Business')}>Business</FilterButton>
          <FilterButton onClick={() => filterPostsByCategory('Technology')}>Technology</FilterButton>
          <FilterButton onClick={() => filterPostsByCategory('Arts')}>Arts</FilterButton>
          <FilterButton onClick={() => filterPostsByCategory('Opinion')}>Opinion</FilterButton>
        </nav>
      </div>
      <main>
        <section className="other-articles">
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          {filteredPosts.length === 0 ? (
            <div className="no-articles">No articles</div>
          ) : (
            filteredPosts.map(post => (
              <article key={post.id} onClick={() => handleArticleClick(post)}>
                <img src="https://via.placeholder.com/400x200" alt="Article Image" />
                <h3>{post.title}</h3>
                <p>{truncateContent(post.content, 20)}</p>
              </article>
            ))
          )}
        </section>
      </main>
      <footer style={{ backgroundColor: footerColor }}>
        <div className="color-buttons">
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
