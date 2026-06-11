import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import GameCard from "../components/GameCard";

function Home() {
  const games = [
    {
      title: "Number Guess 0-100",
      desc: "Guess the hidden number",
      image: "https://picsum.photos/seed/numguess/500/300",
      to: "/number-guess",
    },
    {
      title: "4 Digit Guess",
      desc: "Crack the secret code",
      image: "https://picsum.photos/seed/digit4/500/300",
    },
    {
      title: "Rock Paper Scissors",
      desc: "Classic hand game",
      image: "https://picsum.photos/seed/rps/500/300",
    },
    {
      title: "Ludo Board",
      desc: "Roll dice, race home",
      image: "https://picsum.photos/seed/ludo/500/300",
    },
  ];

  return (
    <>
      <Navbar />
      <Sidebar />

      <div style={{ marginLeft: "70px" }}>
        <div className="hero">
          <h1>HAPPI GAMES</h1>
          <p>Challenge friends and players worldwide</p>
          <button>Play Now</button>
        </div>

        <div className="section-header">
          <h2>— Game Arcade —</h2>
        </div>

        <section className="games">
          {games.map((game, i) => (
            <GameCard key={i} {...game} />
          ))}
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Home;
