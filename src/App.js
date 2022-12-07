import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Topics from "./components/Topics";
import ArticleList from "./components/ArticleList";
import Article from "./components/Article";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-layer2">
        <Header />

        <Routes>
          <Route path="/" element={<Topics />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles/:article_id" element={<Article />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
