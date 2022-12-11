import { useState, useEffect } from "react";
import { getArticleList } from "../utils/axiosSettings";
import { Link } from "react-router-dom";
import swapIcon from "../icons/swapIcon.svg";

const ArticleList = ({ currentTopic }) => {
  const [articleList, setArticleList] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const [sortClicked, setSortClicked] = useState(false);
  const [sortBy, setSortBy] = useState();
  const [order, setOrder] = useState("desc");

  useEffect(() => {
    getArticleList(currentTopic, sortBy, order).then((apiResult) => {
      setArticleList(apiResult);
      setLoading(false);
    });
  }, [currentTopic, sortBy, order]);

  return loading ? (
    <section className="ArticleListLoading">
      <h1>Loading Articles...</h1>
    </section>
  ) : (
    <section className="ArticleList">
      <button id="articleList-btn"></button>
      <div className="sort-container">
        <button
          id="sort-btn"
          onClick={() => {
            setSortClicked(!sortClicked);
          }}
        >
          sort by
        </button>
        <button
          id="order-btn"
          onClick={() => {
            order === "desc" ? setOrder("asc") : setOrder("desc");
          }}
        >
          {order}
          <img src={swapIcon} alt="swap icon"></img>
        </button>
      </div>

      {sortClicked ? (
        <section>
          <ul className="sortList">
            <Link
              to={
                currentTopic
                  ? `/articles/${currentTopic}&&?sort_by=created_at`
                  : "/articles/?sort_by=created_at"
              }
            >
              <li>
                <button
                  onClick={() => {
                    setSortBy("created_at");
                  }}
                >
                  date
                </button>
              </li>
            </Link>
            <Link
              to={
                currentTopic
                  ? `/articles/${currentTopic}&&?sort_by=comment_count`
                  : "/articles/?sort_by=comment_count"
              }
            >
              <li>
                <button
                  onClick={() => {
                    setSortBy("comment_count");
                  }}
                >
                  comment count
                </button>
              </li>
            </Link>

            <Link
              to={
                currentTopic
                  ? `/articles/${currentTopic}&&?sort_by=votes`
                  : "/articles/?sort_by=votes"
              }
            >
              <li>
                <button
                  onClick={() => {
                    setSortBy("votes");
                  }}
                >
                  votes
                </button>
              </li>
            </Link>
          </ul>
        </section>
      ) : null}
      <article>
        <ul className="Article-list">
          {articleList.map((article) => {
            const articleDate = new Date(article.created_at);
            const formattedDate = articleDate.toUTCString();
            return (
              <Link to={`/articles/${article.topic}/${article.article_id}`}>
                <li className="Article--card" key={article.article_id}>
                  <h1>{article.topic}</h1>
                  <h2>{article.author}</h2>
                  <h3>{article.title}</h3>
                  <p>{formattedDate}</p>
                </li>
              </Link>
            );
          })}
        </ul>
      </article>
    </section>
  );
};

export default ArticleList;
