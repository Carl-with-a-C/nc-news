import { useState, useEffect } from "react";
import { getArticleList } from "../utils/axiosSettings";
import { Link } from "react-router-dom";

const ArticleList = ({ currentTopic }) => {
  const [articleList, setArticleList] = useState([{}]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticleList(currentTopic).then((apiResult) => {
      setArticleList(apiResult);
      setLoading(false);
    });
  }, [currentTopic]);

  return loading ? (
    <section className="ArticleListLoading">
      <h1>Loading...</h1>
    </section>
  ) : (
    <section className="ArticleList">
      <article>
        <ul className="Article-list">
          {articleList.map((article) => {
            const articleDate = new Date(article.created_at);
            const formattedDate = articleDate.toUTCString();
            return (
              <Link to={`/articles/${article.article_id}`}>
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
