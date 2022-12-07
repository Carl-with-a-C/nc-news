import Comments from "./Comments";

import { useState, useEffect } from "react";
import { getArticle } from "../utils/axiosSettings";
import { useParams } from "react-router";

const Article = () => {
  const [currentArticle, setCurrentArticle] = useState([{}]);

  const { article_id } = useParams();

  useEffect(() => {
    getArticle(article_id).then(({ article }) => {
      setCurrentArticle(article);
    });
  }, [article_id]);

  // const date = new Date();

  return (
    <article className="Article">
      <h1>{currentArticle.topic}</h1>
      <h2>{currentArticle.title}</h2>
      <small>
        <strong>{currentArticle.author}</strong> | {currentArticle.created_at}
      </small>
      <p>{currentArticle.body}</p>
      <Comments article_id={article_id} />
    </article>
  );
};

export default Article;
