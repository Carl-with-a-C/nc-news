import { Link } from "react-router-dom";

export const Home = ({ user, setUser }) => {
  return (
    <main className={user ? "Home" : "LoginHome"}>
      <h1>welcome</h1>
      <Link to="/articles">
        <button
          onClick={() => {
            setUser("login");
          }}
        >
          see things
        </button>
      </Link>
    </main>
  );
};
