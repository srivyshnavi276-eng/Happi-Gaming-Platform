import { Link } from "react-router-dom";

function GameCard({ title, image, desc, to }) {
  return (
    <div className="game-card">
      <img src={image} alt={title} />
      <div className="game-info">
        <h3>{title}</h3>
        <p>{desc}</p>
        {to ? (
          <Link to={to}><button>Play Now</button></Link>
        ) : (
          <button>Play Now</button>
        )}
      </div>
    </div>
  );
}

export default GameCard;
