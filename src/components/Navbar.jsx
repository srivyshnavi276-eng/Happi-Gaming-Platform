import { Link } from "react-router-dom";
import { FaBell, FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">HAPPI&nbsp;&nbsp;GAMES</div>

      <div className="nav-right">
        <button className="alerts-btn">
          <FaBell /> Alerts
        </button>
        <FaUserCircle className="icon" size={32} />
      </div>
    </nav>
  );
}

export default Navbar;
