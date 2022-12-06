import Header from "./components/Header";
// import Navbar from "./components/Navbar";
import "./App.css";
import ArticleList from "./components/ArticleList";
import Article from "./components/Article";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Navbar /> */}

      <Routes>
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
