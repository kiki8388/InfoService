import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home"
import NotExist from "./components/NotExist/NotExist";
import NavBar from "./components/NavBar/NavBar";
import Article from "./components/Home/Article";

function App() {
  return (
    <>
    {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<Article />} />
        <Route path="*" element={<NotExist />} />
      </Routes>      
    </>
  );
}

export default App
