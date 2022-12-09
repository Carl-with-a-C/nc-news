import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { Login } from "./components/Login";
import ArticleList from "./components/ArticleList";
import Article from "./components/Article";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");

  return (
    <div className="App">
      <Navbar />
      <div className="App-layer2">
        <Header user={user} />

        <Routes>
          <Route path="/" element={<Login setUser={setUser} />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles/:article_id" element={<Article />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
