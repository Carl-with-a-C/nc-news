import Comments from "./Comments";
import upvoteIcon from "../icons/upvoteIcon.svg";

import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getArticle } from "../utils/axiosSettings";
import { updateVote } from "../utils/axiosSettings";

const Article = () => {
  const [currentArticle, setCurrentArticle] = useState([{}]);
  const [articleLoading, setArticleLoading] = useState(true);
  const [articleVotes, setArticleVotes] = useState(0);

  const { article_id } = useParams();

  useEffect(() => {
    getArticle(article_id).then(({ article }) => {
      setCurrentArticle(article);
      setArticleVotes(article.votes);
      setArticleLoading(false);
    });
  }, [article_id]);

  const addVote = () => {
    setArticleVotes((articleVotes) => articleVotes + 1);
    updateVote(article_id);
  };

  return articleLoading ? (
    <h1>Article Loading...</h1>
  ) : (
    <article className="Article">
      <h1>{currentArticle.topic}</h1>
      <h2>{currentArticle.title}</h2>
      <small>
        <strong>{currentArticle.author}</strong> | {currentArticle.created_at}
      </small>
      <p>{currentArticle.body}</p>
      <button
        id="upvote-btn"
        onClick={() => {
          addVote();
        }}
      >
        <img src={upvoteIcon} alt="upvote icon"></img>
        <small>{articleVotes}</small>
      </button>
      <Comments article_id={article_id} />
    </article>
  );
};

export default Article;
