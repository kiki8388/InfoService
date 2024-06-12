import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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

  const handlePosts = async () => {
    setPostsData([]);
    try {
      const response = await axios.get(`${apiURL}/Post/GetAll`);
      setPostsData(response.data);
      setFilteredPosts(response.data); // Initialize filtered posts
    } catch (error: any) {
      if (error.response) {
        console.log(error.response);
        setErrorMessage(error.response);
      } else {
        console.log(`ERROR: ${error}`);
        setErrorMessage(error);
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

  return (
    <>
      <header>
        <div className="logo">
          <h1>InfoService</h1>
        </div>
        <nav className="filter-buttons">
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
      <div className='headerNav' style={{ visibility: visible ? 'visible' : 'hidden', opacity: visible ? 1 : 0 }}>
        <nav className='filter-buttons'>
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
      <main>
        <section className="other-articles">
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

      <footer>
        <p>&copy; 2024 News Website. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Home;
