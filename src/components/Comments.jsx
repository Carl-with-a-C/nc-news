import { getComments } from "../utils/axiosSettings";
import { deleteCommentById } from "../utils/axiosSettings";
import { useState, useEffect } from "react";
import closeBtn from "../icons/closeBtn.svg";
import upvoteIcon from "../icons/upvoteIcon.svg";
import addCommentIcon from "../icons/addCommentIcon.svg";
import deleteCommentIcon from "../icons/deleteCommentIcon.svg";
import { postComment } from "../utils/axiosSettings";
import { isDisabled } from "@testing-library/user-event/dist/utils";

const Comments = ({ article_id, currentArticle }) => {
  const [comments, setComments] = useState([{}]);
  const [isLoading, setISLoading] = useState(true);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [commentFormOpen, setCommentFormOpen] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [commentList, setCommentList] = useState([]);

  const user = { username: "grumpy19" };

  const [newComment, setNewComment] = useState({
    author: user.username,
    body: "",
    created_at: Date(),
    votes: 0,
    comment_id: "",
  });

  const [commentMessage, setCommentMessage] = useState("");

  useEffect(() => {
    getComments(article_id).then(({ comments }) => {
      setComments(comments);
    });
  }, [article_id]);

  const submitComment = (comment) => {
    setMessageSent(true);
    setComments((comments) => {
      return [comment, ...comments];
    });

    postComment(article_id, comment)
      .then((apiComment) => {
        console.log(apiComment, "<<<api comment");
        setNewComment({
          author: "grumpy19",
          body: "",
          created_at: Date(),
          votes: 0,
          comment_id: apiComment.comment_id,
        });
        setCommentMessage("Comment Added. Thanks!");
        setMessageSent(false);
      })
      .catch((err) => {
        setCommentMessage("Something went wrong. Please try again");
        setMessageSent(false);
      });
  };

  {
    console.log(comments);
  }

  const handleDeleteComment = (comment_id) => {
    setMessageSent(true);
    deleteCommentById(comment_id)
      .then(() => {
        setComments((currComments) => {
          return currComments.filter((comments) => {
            const newComments = { ...comments };
            return newComments.comment_id !== comment_id;
          });
        });
      })
      .then(() => {
        setCommentMessage("Comment Deleted");
        setMessageSent(false);
      });
  };

  const toggleComments = () => {
    setCommentsOpen(!commentsOpen);
  };
  const toggleCommentForm = () => {
    setCommentFormOpen(!commentFormOpen);
  };

  return !commentsOpen ? (
    <button
      onClick={() => {
        toggleComments();
      }}
      className={!commentsOpen ? "Comments-closed" : "Comments"}
    >
      <p>view comments</p>
    </button>
  ) : (
    <section className="Comments">
      <button
        id="back-btn"
        onClick={() => {
          toggleComments();
        }}
      >
        <img src={closeBtn} alt="close button"></img>
      </button>
      <p>
        Comments <small>{comments.length}</small>
      </p>
      <h1 id="Comments-headline">{currentArticle.title}</h1>
      <button
        onClick={() => {
          toggleCommentForm();
          setCommentMessage("");
        }}
        id="addComment-btn"
      >
        <h2>add comment</h2>
        <img src={addCommentIcon} alt="add comment icon"></img>
      </button>
      {commentFormOpen ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (newComment.body) {
              submitComment(newComment);
            } else {
              setCommentMessage("Please type comment before uploading");
            }
          }}
        >
          <label htmlFor="comment_body">
            <textarea
              rows="5"
              cols="60"
              wrap="soft"
              className="Comment--input"
              onChange={(e) =>
                setNewComment({ ...newComment, body: e.target.value })
              }
              id="comment_body"
              type="text"
              name="comment_body"
              value={newComment.body}
              placeholder="Add a comment..."
            ></textarea>
          </label>
          <button
            disabled={messageSent ? true : false}
            id="submit-btn"
            type="submit"
          >
            Upload
          </button>
        </form>
      ) : null}
      <p id="comment-message">{commentMessage}</p>

      <ul>
        {comments.map((comment) => {
          const commentDate = new Date(comment.created_at);
          const formattedDate = commentDate.toUTCString();
          return (
            <li className="Comment-card" key={comment.comment_id}>
              <h1>{comment.author}</h1>
              <h2>{formattedDate}</h2>
              <p>{comment.body}</p>
              <button>
                <img src={upvoteIcon} alt="upvote icon"></img>
                <small>{comment.votes}</small>
              </button>
              {comment.author == user.username ? (
                <button
                  id="delete-comment--btn"
                  disabled={messageSent ? true : false}
                  value={comment.comment_id}
                  onClick={(e) => {
                    e.preventDefault();
                    handleDeleteComment(comment.comment_id);
                  }}
                >
                  <h2 id="delete-comment-text">delete comment</h2>
                  <img src={deleteCommentIcon} alt="delete comment icon"></img>
                </button>
              ) : null}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Comments;
