import Header from "./components/Header";
// import Navbar from "./components/Navbar";
import "./App.css";
import ArticleList from "./components/ArticleList";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Navbar /> */}
      <ArticleList />
    </div>
  );
}

export default App;
