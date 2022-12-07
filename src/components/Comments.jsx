import { getComments } from "../utils/axiosSettings";
import { useState, useEffect } from "react";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([{}]);
  const [commentsOpen, setCommentsOpen] = useState(false);

  const toggleComments = () => {
    setCommentsOpen(!commentsOpen);
  };

  useEffect(() => {
    getComments(article_id).then(({ comments }) => {
      console.log(comments, "<<<comments");
      setComments(comments);
    });
  }, [article_id]);

  return !commentsOpen ? (
    <button
      onClick={() => {
        toggleComments();
        console.log(commentsOpen);
      }}
      className="Comments"
    >
      <p>view comments</p>
    </button>
  ) : (
    <section className="Comments">
      <button
        id="back-btn"
        onClick={() => {
          toggleComments();
          console.log(commentsOpen);
        }}
      >
        X
      </button>
      <ul>
        {comments.map((comment) => {
          return (
            <li className="Comment-card" key={comment.comment_id}>
              <h1>{comment.author}</h1>
              <h2>{comment.created_at}</h2>
              <p>{comment.body}</p>
              <button>{comment.votes}</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Comments;
