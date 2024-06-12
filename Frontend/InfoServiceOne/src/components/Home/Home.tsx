import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import "./Home.css";

interface PostData {
  id: string;
  title: string;
  content: string;
  category: string;
  author: string;
  views: number;
}

const Home: React.FC = () => {
  const apiURL = "https://localhost:7083/api";
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [visible, setVisible] = useState(false);
  const [postsData, setPostsData] = useState<Array<PostData>>([]);
  const [filteredPosts, setFilteredPosts] = useState<Array<PostData>>([]);

  // State for managing colors
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
      navigate(`/article`, { state: updatedPost });
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

  const changeAllColors = () => {
    setHeaderColor('#333333');
    setFooterColor('#333333');
    setButtonColor('#333333');
    setButtonHoverColor('#272727'); // Set the new hover color here
  };

  const changeIndividualColors = () => {
    setHeaderColor('#FF5733');
    setFooterColor('#33FF57');
    setButtonColor('#3357FF');
    setButtonHoverColor('#FF33FF'); // Set a different hover color here if needed
  };

  const FilterButton = styled.button<{ hoverColor: string }>`
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    font-size: 16px;
    transition: background-color 0.3s;
    color: white;
    background-color: ${buttonColor};

    &:hover {
      background-color: ${props => props.hoverColor};
    }
  `;

  return (
    <>
      <header style={{ backgroundColor: headerColor }}>
        <div className="logo">
          <h1>InfoService</h1>
        </div>
        <nav className="filter-buttons">
          <FilterButton hoverColor={buttonHoverColor} onClick={() => filterPostsByCategory('All')}>All</FilterButton>
          <FilterButton hoverColor={buttonHoverColor} onClick={() => filterPostsByCategory('Sports')}>Sports</FilterButton>
          <FilterButton hoverColor={buttonHoverColor} onClick={() => filterPostsByCategory('World')}>World</FilterButton>
          <FilterButton hoverColor={buttonHoverColor} onClick={() => filterPostsByCategory('Politics')}>Politics</FilterButton>
          <FilterButton hoverColor={buttonHoverColor} onClick={() => filterPostsByCategory('Business')}>Business</FilterButton>
          <FilterButton hoverColor={buttonHoverColor} onClick={() => filterPostsByCategory('Technology')}>Technology</FilterButton>
          <FilterButton hoverColor={buttonHoverColor} onClick={() => filterPostsByCategory('Arts')}>Arts</FilterButton>
          <FilterButton hoverColor={buttonHoverColor} onClick={() => filterPostsByCategory('Opinion')}>Opinion</FilterButton>
        </nav>
      </header>
      <div className='headerNav' style={{ visibility: visible ? 'visible' : 'hidden', opacity: visible ? 1 : 0, backgroundColor: headerColor }}>
        <nav className='filter-buttons'>
          <FilterButton hoverColor={buttonHoverColor} onClick={() => filterPostsByCategory('All')}>All</FilterButton>
          <FilterButton hoverColor={buttonHoverColor} onClick={() => filterPostsByCategory('Sports')}>Sports</FilterButton>
          <FilterButton hoverColor={buttonHoverColor} onClick={() => filterPostsByCategory('World')}>World</FilterButton>
          <FilterButton hoverColor={buttonHoverColor} onClick={() => filterPostsByCategory('Politics')}>Politics</FilterButton>
          <FilterButton hoverColor={buttonHoverColor} onClick={() => filterPostsByCategory('Business')}>Business</FilterButton>
          <FilterButton hoverColor={buttonHoverColor} onClick={() => filterPostsByCategory('Technology')}>Technology</FilterButton>
          <FilterButton hoverColor={buttonHoverColor} onClick={() => filterPostsByCategory('Arts')}>Arts</FilterButton>
          <FilterButton hoverColor={buttonHoverColor} onClick={() => filterPostsByCategory('Opinion')}>Opinion</FilterButton>
        </nav>
      </div>
      <div className="color-buttons">
        <button onClick={changeAllColors}>Change All Colors</button>
        <button onClick={changeIndividualColors}>Change Individual Colors</button>
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
        <p>&copy; 2024 News Website. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Home;
