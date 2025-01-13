import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import ArticlesFeed from "./pages/Feed";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";


const App: React.FC = () => {
  return (
    <Router>
      <div>
      <CursorGlow/>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/articles" element={<ArticlesFeed />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
