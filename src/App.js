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
      <Navbar user={user} />
      <div className="App-layer2">
        <Header user={user} />
        <Topics
          setCurrentTopic={setCurrentTopic}
          currentTopic={currentTopic}
          user={user}
        />

        <Routes>
          <Route path="/" element={<Login user={user} setUser={setUser} />} />
          <Route
            path={currentTopic ? "/articles/:topic" : "/articles"}
            element={<ArticleList currentTopic={currentTopic} />}
          />
          <Route
            path="/articles/:topic/:article_id"
            element={<Article setCurrentTopic={setCurrentTopic} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
