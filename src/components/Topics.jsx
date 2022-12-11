import { Link } from "react-router-dom";
import { useState } from "react";

const Topics = ({ setCurrentTopic, currentTopic, user, articleClicked }) => {
  //NEED TO ADD API CALL FOR TOPICS (WILL ALLOW U TO SHOW NUMBER OF ARTICLES !!!!!!!!!
  //NEED TO MAKE URL MATCH!!

  const clickTopic = (topic) => {
    setCurrentTopic(topic);
  };

  return user ? (
    <main className="Topics">
      <button id="topic-btn"></button>
      <ul>
        <li>
          <Link to="articles/football">
            <button
              value="football"
              onClick={(e) => {
                clickTopic(e.target.value);
              }}
            >
              football
            </button>
          </Link>
        </li>

        <li>
          <Link to="articles/coding">
            <button
              value="coding"
              onClick={(e) => {
                clickTopic(e.target.value);
              }}
            >
              coding
            </button>
          </Link>
        </li>
        <li>
          <Link to="articles/cooking">
            <button
              value="cooking"
              onClick={(e) => {
                clickTopic(e.target.value);
              }}
            >
              cooking
            </button>
          </Link>
        </li>
      </ul>
    </main>
  ) : null;
};

export default Topics;
