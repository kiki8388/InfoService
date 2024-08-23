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
  const [sportsPosts, setSportsPosts] = useState<Array<PostData>>([]);
  const [worldPosts, setWorldPosts] = useState<Array<PostData>>([]);
  const [politicsPosts, setPoliticsPosts] = useState<Array<PostData>>([]);
  const [businessPosts, setBusinessPosts] = useState<Array<PostData>>([]);
  const [technologyPosts, setTechnologyPosts] = useState<Array<PostData>>([]);
  const [artsPosts, setArtsPosts] = useState<Array<PostData>>([]);
  const [opinionPosts, setOpinionPosts] = useState<Array<PostData>>([]);

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
      </header>
      <main className='mainFour'>
        <section className="otherArticlesFour">
        <div className='articleCategoryContainerFour'>
            <h1>Sports</h1>
            {errorMessage && <div className="errorMessage">{errorMessage}</div>}
            <div className='articleListFour'>
            {sportsPosts.length === 0 ? (
              <div className="noArticlesFour">No articles</div>
            ) : (
              sportsPosts.map(post => (
                <article className='articleFour' key={post.id} onClick={() => handleArticleClick(post)}>
                  <img src="https://via.placeholder.com/400x200" alt="Article Image" />
                  <h3>{post.title}</h3>
                </article>
              ))
            )}
            </div>
          </div>
          <div className='articleCategoryContainerFour'>
            <h1>World</h1>
            {errorMessage && <div className="errorMessage">{errorMessage}</div>}
            <div className='articleListFour'>
            {worldPosts.length === 0 ? (
              <div className="noArticlesFour">No articles</div>
            ) : (
              worldPosts.map(post => (
                <article className='articleFour' key={post.id} onClick={() => handleArticleClick(post)}>
                  <img src="https://via.placeholder.com/400x200" alt="Article Image" />
                  <h3>{post.title}</h3>
                </article>
              ))
            )}
            </div>
          </div>
          <div className='articleCategoryContainerFour'>
            <h1>Politics</h1>
            {errorMessage && <div className="errorMessage">{errorMessage}</div>}
            <div className='articleListFour'>
            {politicsPosts.length === 0 ? (
              <div className="noArticlesFour">No articles</div>
            ) : (
              worldPosts.map(post => (
                <article className='articleFour' key={post.id} onClick={() => handleArticleClick(post)}>
                  <img src="https://via.placeholder.com/400x200" alt="Article Image" />
                  <h3>{post.title}</h3>
                </article>
              ))
            )}
            </div>
          </div>
          <div className='articleCategoryContainerFour'>
            <h1>Business</h1>
            {errorMessage && <div className="errorMessage">{errorMessage}</div>}
            <div className='articleListFour'>
            {businessPosts.length === 0 ? (
              <div className="noArticlesFour">No articles</div>
            ) : (
              businessPosts.map(post => (
                <article className='articleFour' key={post.id} onClick={() => handleArticleClick(post)}>
                  <img src="https://via.placeholder.com/400x200" alt="Article Image" />
                  <h3>{post.title}</h3>
                </article>
              ))
            )}
            </div>
          </div>
          <div className='articleCategoryContainerFour'>
            <h1>Technology</h1>
            {errorMessage && <div className="errorMessage">{errorMessage}</div>}
            <div className='articleListFour'>
            {technologyPosts.length === 0 ? (
              <div className="noArticlesFour">No articles</div>
            ) : (
              technologyPosts.map(post => (
                <article className='articleFour' key={post.id} onClick={() => handleArticleClick(post)}>
                  <img src="https://via.placeholder.com/400x200" alt="Article Image" />
                  <h3>{post.title}</h3>
                </article>
              ))
            )}
            </div>
          </div>
          <div className='articleCategoryContainerFour'>
            <h1>Arts</h1>
            {errorMessage && <div className="errorMessage">{errorMessage}</div>}
            <div className='articleListFour'>
            {artsPosts.length === 0 ? (
              <div className="noArticlesFour">No articles</div>
            ) : (
              artsPosts.map(post => (
                <article className='articleFour' key={post.id} onClick={() => handleArticleClick(post)}>
                  <img src="https://via.placeholder.com/400x200" alt="Article Image" />
                  <h3>{post.title}</h3>
                </article>
              ))
            )}
            </div>
          </div>
          <div className='articleCategoryContainerFour'>
            <h1>Opinion</h1>
            {errorMessage && <div className="errorMessage">{errorMessage}</div>}
            <div className='articleListFour'>
            {opinionPosts.length === 0 ? (
              <div className="noArticlesFour">No articles</div>
            ) : (
              opinionPosts.map(post => (
                <article className='articleFour' key={post.id} onClick={() => handleArticleClick(post)}>
                  <img src="https://via.placeholder.com/400x200" alt="Article Image" />
                  <h3>{post.title}</h3>
                </article>
              ))
            )}
            </div>
          </div>
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
