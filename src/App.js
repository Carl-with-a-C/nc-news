import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Topics from "./components/Topics";
import ArticleList from "./components/ArticleList";
import Article from "./components/Article";
import { Login } from "./components/Login";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");
  const [currentTopic, setCurrentTopic] = useState();

  return (
    <div className="App">
      <Navbar />
      <div className="App-layer2">
        <Header user={user} />
        <Topics
          setCurrentTopic={setCurrentTopic}
          currentTopic={currentTopic}
          user={user}
        />

        <Routes>
          <Route path="/" element={<Login setUser={setUser} />} />
          <Route
            path="/articles"
            element={<ArticleList currentTopic={currentTopic} />}
          />
          <Route
            path="/topic/:topic"
            element={<ArticleList currentTopic={currentTopic} />}
          />
          <Route path="/articles/:article_id" element={<Article />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
