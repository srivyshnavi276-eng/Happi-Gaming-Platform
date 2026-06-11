import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const loggedIn = localStorage.getItem("loggedIn");

<div className="header-right">
  {loggedIn ? (
    <FaUserCircle size={40} />
  ) : (
    <>
      <Link to="/login">
        <button className="login-btn">
          Log In
        </button>
      </Link>
    </>
  )}
</div>