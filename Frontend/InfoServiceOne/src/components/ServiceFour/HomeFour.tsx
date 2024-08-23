import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./HomeFour.css";

interface PostData {
  id: string;
  title: string;
  content: string;
  category: string;
  author: string;
  views: number;
}

const HomeFour: React.FC = () => {
  const apiURL = "https://localhost:7083/api";
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [visible, setVisible] = useState(false);
  const [postsData, setPostsData] = useState<Array<PostData>>([]);
  const [filteredPosts, setFilteredPosts] = useState<Array<PostData>>([]);

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
    document.documentElement.style.setProperty('--bgColor', 'white');
    document.documentElement.style.setProperty('--headerColor', 'white');
    document.documentElement.style.setProperty('--headerBgColor', '#333');
    document.documentElement.style.setProperty('--navButtonColor', 'white');
    document.documentElement.style.setProperty('--navButtonBgColor', '#333');
    document.documentElement.style.setProperty('--navButtonBgHoverColor', '#272727');
    document.documentElement.style.setProperty('--articleColor', 'black');
    document.documentElement.style.setProperty('--articleBgColor', '#f4f4f4');
    document.documentElement.style.setProperty('--footerColor', 'white');
    document.documentElement.style.setProperty('--footerBgColor', '#333');
  };

  const chooseColorSchemeTwo = () => {
    document.documentElement.style.setProperty('--bgColor', 'black');
    document.documentElement.style.setProperty('--headerColor', 'black');
    document.documentElement.style.setProperty('--headerBgColor', '#272727');
    document.documentElement.style.setProperty('--navButtonColor', 'black');
    document.documentElement.style.setProperty('--navButtonBgColor', '#272727');
    document.documentElement.style.setProperty('--navButtonBgHoverColor', '#333');
    document.documentElement.style.setProperty('--articleColor', 'white');
    document.documentElement.style.setProperty('--articleBgColor', '#f4f4f4');
    document.documentElement.style.setProperty('--footerColor', 'black');
    document.documentElement.style.setProperty('--footerBgColor', '#272727');
  };

  const chooseColorSchemeThree = () => {
    document.documentElement.style.setProperty('--bgColor', 'white');
    document.documentElement.style.setProperty('--headerColor', 'white');
    document.documentElement.style.setProperty('--headerBgColor', '#333');
    document.documentElement.style.setProperty('--navButtonColor', 'white');
    document.documentElement.style.setProperty('--navButtonBgColor', '#333');
    document.documentElement.style.setProperty('--navButtonBgHoverColor', '#272727');
    document.documentElement.style.setProperty('--articleColor', 'black');
    document.documentElement.style.setProperty('--articleBgColor', '#f4f4f4');
    document.documentElement.style.setProperty('--footerColor', 'white');
    document.documentElement.style.setProperty('--footerBgColor', '#333');
  };

  const chooseColorSchemeFour = () => {
    document.documentElement.style.setProperty('--bgColor', 'white');
    document.documentElement.style.setProperty('--headerColor', 'white');
    document.documentElement.style.setProperty('--headerBgColor', '#333');
    document.documentElement.style.setProperty('--navButtonColor', 'white');
    document.documentElement.style.setProperty('--navButtonBgColor', '#333');
    document.documentElement.style.setProperty('--navButtonBgHoverColor', '#272727');
    document.documentElement.style.setProperty('--articleColor', 'black');
    document.documentElement.style.setProperty('--articleBgColor', '#f4f4f4');
    document.documentElement.style.setProperty('--footerColor', 'white');
    document.documentElement.style.setProperty('--footerBgColor', '#333');
  };

  return (
    <div className='containerFour'>
      <header className="headerFour">
        <div className="logoFour">
          <h1>InfoService</h1>
        </div>
        <nav className="filterButtonsFour">
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
      <div className='headerNavFour' style={{ visibility: visible ? 'visible' : 'hidden', opacity: visible ? 1 : 0}}>
        <nav className='filterButtonsFour'>
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
      <main className='mainFour'>
        <section className="otherArticlesFour">
          {errorMessage && <div className="errorMessage">{errorMessage}</div>}
          {filteredPosts.length === 0 ? (
            <div className="noArticlesFour">No articles</div>
          ) : (
            filteredPosts.map(post => (
              <article className='articleFour' key={post.id} onClick={() => handleArticleClick(post)}>
                <img src="https://via.placeholder.com/400x200" alt="Article Image" />
                <h3>{post.title}</h3>
                <p>{truncateContent(post.content, 20)}</p>
              </article>
            ))
          )}
        </section>
      </main>
      <footer className="footerFour">
        <div className='fillerFooterFour'></div>
        <p>&copy; 2024 News Website. All rights reserved.</p>
        <div className="colorButtonsFour">
          <button onClick={chooseColorSchemeOne}></button>
          <button onClick={chooseColorSchemeTwo}></button>
          <button onClick={chooseColorSchemeThree}></button>
          <button onClick={chooseColorSchemeFour}></button>
        </div>
      </footer>
    </div>
  );
}

export default HomeFour;
