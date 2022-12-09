import Comments from "./Comments";
import upvoteIcon from "../icons/upvoteIcon.svg";
import backArrowIcon from "../icons/backArrowIcon.svg";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getArticle } from "../utils/axiosSettings";
import { updateVote } from "../utils/axiosSettings";

const Article = () => {
  const [currentArticle, setCurrentArticle] = useState([{}]);
  const [articleLoading, setArticleLoading] = useState(true);
  const [articleVotes, setArticleVotes] = useState(0);
  const [err, setErr] = useState(null);

  const { article_id } = useParams();

  const articleDate = new Date(currentArticle.created_at);
  const formattedDate = articleDate.toDateString();

  useEffect(() => {
    getArticle(article_id).then(({ article }) => {
      setCurrentArticle(article);
      setArticleVotes(article.votes);
      setArticleLoading(false);
    });
  }, [article_id]);

  const addVote = () => {
    setArticleVotes((articleVotes) => articleVotes + 1);
    setErr(null);
    updateVote(article_id).catch((err) => {
      setArticleVotes((articleVotes) => articleVotes - 1);
      setErr("Something went wrong, please try again.");
    });
  };

  return articleLoading ? (
    <article className="ArticleLoading">
      <h1>Article Loading...</h1>
    </article>
  ) : (
    <article className="Article">
      <Link to="/articles">
        <button id="backArrow-btn">
          <img src={backArrowIcon} alt="back button"></img>
        </button>
      </Link>
      <h1>{currentArticle.topic}</h1>
      <h2>{currentArticle.title}</h2>
      <small>
        <strong>{currentArticle.author}</strong> | {formattedDate}
      </small>
      <p>{currentArticle.body}</p>
      <button
        id="upvote-btn"
        onClick={() => {
          addVote();
        }}
      >
        <img id="upvote-img" src={upvoteIcon} alt="upvote icon"></img>
        <small>{articleVotes}</small>
      </button>
      <Comments article_id={article_id} currentArticle={currentArticle} />
    </article>
  );
};

export default Article;
