import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ResumeStory from "./pages/Resume";
import ArticlesFeed from "./pages/Feed";
import NavBar from "./components/NavBar";


const App: React.FC = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume-story" element={<ResumeStory />} />
          <Route path="/articles" element={<ArticlesFeed />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
