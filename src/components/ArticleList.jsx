import React from "react";
import { useState, useEffect } from "react";
import { getArticleList } from "../utils/getArticleList";

const ArticleList = () => {
  const [articleList, setArticleList] = useState([{}]);

  useEffect(() => {
    getArticleList().then((apiResult) => {
      setArticleList(apiResult);
    });
  }, []);

  return (
    <section className="ArticleList">
      {/* <span>02</span> */}
      <ul className="Article-list">
        {articleList.map((article) => {
          return (
            <li className="Article--card" key={article.article_id}>
              <h1>{article.topic}</h1>
              <h2>{article.title}</h2>
              <p>
                {article.author} | {article.created_at}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ArticleList;
