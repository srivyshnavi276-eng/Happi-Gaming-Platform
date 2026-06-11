import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function Dashboard() {
  const stats = [
    { label: "Games Played", value: "24" },
    { label: "Wins", value: "11" },
    { label: "Coins", value: "840" },
    { label: "Rank", value: "#42" },
  ];

  return (
    <>
      <Navbar />
      <Sidebar />
      <div style={{ marginLeft: "70px" }}>
        <div className="dashboard">
          <h1>Player Dashboard</h1>
          <div className="stats">
            {stats.map((s, i) => (
              <div className="stat-card" key={i}>
                <div className="stat-label">{s.label}</div>
                <div className="stat-value">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Dashboard;
