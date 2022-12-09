import { Link } from "react-router-dom";

export const Login = ({ setUser }) => {
  return (
    <main className="Login">
      <h1>welcome</h1>
      <Link to="/articles">
        <button
          onClick={() => {
            setUser("grumpy19");
          }}
        >
          LOGIN
        </button>
      </Link>
    </main>
  );
};
