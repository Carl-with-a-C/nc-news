import { Link } from "react-router-dom";

const Topics = () => {
  return (
    <Link to="/articles">
      <div className="Topics">Click for Articles</div>;
    </Link>
  );
};

export default Topics;
