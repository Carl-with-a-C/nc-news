import { Link } from "react-router-dom";

export const Login = ({ user, setUser }) => {
  return (
    <main className={user ? "Login" : "LoginHome"}>
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
