import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import "./HomeTwo.css";

interface PostData {
  id: string;
  title: string;
  content: string;
  category: string;
  author: string;
  views: number;
}

const HomeTwo: React.FC = () => {
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

  const FilterButton = styled.button<{}>`
    padding: 15px 20px;
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
    <div className='containerTwo' style={{ backgroundColor: backgroundColor }}>
      <header className="headerTwo" style={{ color: headerColor, backgroundColor: headerBackgroundColor }}>
        <div className="logoTwo">
          <h1>InfoService</h1>
        </div>
        <nav className="filterButtonsTwo">
          <FilterButton onClick={() => filterPostsByCategory('All')}>All</FilterButton>
          <FilterButton onClick={() => filterPostsByCategory('Sports')}>Sports</FilterButton>
          <FilterButton onClick={() => filterPostsByCategory('World')}>World</FilterButton>
          <FilterButton onClick={() => filterPostsByCategory('Politics')}>Politics</FilterButton>
          <FilterButton onClick={() => filterPostsByCategory('Business')}>Business</FilterButton>
          <FilterButton onClick={() => filterPostsByCategory('Technology')}>Technology</FilterButton>
          <FilterButton onClick={() => filterPostsByCategory('Arts')}>Arts</FilterButton>
          <FilterButton onClick={() => filterPostsByCategory('Opinion')}>Opinion</FilterButton>
        </nav>
        <footer className="footerTwo" style={{ backgroundColor: footerBackgroundColor }}>
          <div className="colorButtonsTwo">
            <button onClick={chooseColorSchemeOne}></button>
            <button onClick={chooseColorSchemeTwo}></button>
            <button onClick={chooseColorSchemeThree}></button>
            <button onClick={chooseColorSchemeFour}></button>
          </div> 
          <p>&copy; 2024 News Website. All rights reserved.</p>       
        </footer>
      </header>
      <main className='mainTwo'>
        <section className="otherArticlesTwo">
          {errorMessage && <div className="errorMessage">{errorMessage}</div>}
          {filteredPosts.length === 0 ? (
            <div className="noArticlesTwo">No articles</div>
          ) : (
            filteredPosts.map(post => (
              <article className='articleTwo' style={{color: articleColor, backgroundColor: articleBackgroundColor}} key={post.id} onClick={() => handleArticleClick(post)}>
                <img src="https://via.placeholder.com/800x100" alt="Article Image" />
                <h3>{post.title}</h3>
                <p>{truncateContent(post.content, 20)}</p>
                <p>Views: {post.views}</p>
              </article>
            ))
          )}
        </section>
      </main>
    </div>
  );
}

export default HomeTwo;
