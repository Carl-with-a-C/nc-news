import { Link } from "react-router-dom";

export const Login = ({ setUser }) => {
  return (
    <Link to="/articles">
      <button
        onClick={() => {
          setUser("grumpy19");
        }}
      >
        <div className="Login">LOGIN</div>
      </button>
    </Link>
  );
};
