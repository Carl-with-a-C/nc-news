import React from "react";
import { useState, useEffect } from "react";
import { getArticleList } from "../utils/axiosSettings";
import { Link } from "react-router-dom";

const ArticleList = () => {
  const [articleList, setArticleList] = useState([{}]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticleList().then((apiResult) => {
      setArticleList(apiResult);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="ArticleList">
      {/* <span>02</span> */}
      <ul className="Article-list">
        {articleList.map((article) => {
          return (
            <Link to={`/articles/${article.article_id}`}>
              <li className="Article--card" key={article.article_id}>
                <h1>{article.topic}</h1>
                <h2>{article.title}</h2>
                {/* <h3>{article.body}</h3> */}
                <p>
                  {article.author} | {article.created_at}
                </p>
              </li>
            </Link>
          );
        })}
      </ul>
    </section>
  );
};

export default ArticleList;
