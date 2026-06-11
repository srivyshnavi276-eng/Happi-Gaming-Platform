import { FaHome, FaGamepad, FaTrophy, FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={{
      width: "70px",
      background: "#1a2e1a",
      height: "100vh",
      position: "fixed",
      left: 0,
      top: 0,
      color: "#f5f0e8",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "28px",
      paddingTop: "100px",
      borderRight: "2px solid #2d5016",
      zIndex: 50,
    }}>
      <Link to="/" style={{ color: "#f5f0e8" }}><FaHome size={22} /></Link>
      <FaGamepad size={22} style={{ opacity: 0.6 }} />
      <FaTrophy size={22} style={{ opacity: 0.6 }} />
      <FaUserFriends size={22} style={{ opacity: 0.6 }} />
    </div>
  );
}

export default Sidebar;
