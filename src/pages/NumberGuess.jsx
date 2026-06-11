import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

function NumberGuess() {
  const [secret] = useState(Math.floor(Math.random() * 101));
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [tries, setTries] = useState(0);
  const [won, setWon] = useState(false);

  const checkGuess = () => {
    const num = Number(guess);
    setTries(t => t + 1);
    if (num === secret) {
      setMessage("🎯 Correct! You cracked it!");
      setWon(true);
    } else if (num < secret) {
      setMessage("↑ Too Low — guess higher");
    } else {
      setMessage("↓ Too High — guess lower");
    }
    setGuess("");
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div style={{ marginLeft: "70px" }}>
        <div style={{
          padding: "30px 60px",
          borderBottom: "2px dashed #1a2e1a",
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}>
          <Link to="/">
            <button style={{
              background: "transparent",
              border: "2px solid #1a2e1a",
              padding: "8px 18px",
              color: "#1a2e1a",
              fontSize: "12px",
              letterSpacing: "2px",
              fontFamily: "var(--font-body)",
            }}>← Back to Home</button>
          </Link>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "32px",
            color: "#c8541a",
            fontStyle: "italic",
          }}>Number Guess 0–100</h2>
        </div>

        <div style={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--cream)",
          backgroundImage: "linear-gradient(rgba(26,46,26,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(26,46,26,0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          padding: "60px",
        }}>
          <div style={{
            background: "var(--cream)",
            border: "2px solid #1a2e1a",
            padding: "48px 44px",
            width: "440px",
            position: "relative",
          }}>
            <div style={{
              position: "absolute",
              inset: "7px",
              border: "1px dashed rgba(26,46,26,0.25)",
              pointerEvents: "none",
            }} />

            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: "22px",
              fontStyle: "italic",
              textAlign: "center",
              marginBottom: "32px",
              color: "#1a2e1a",
            }}>Computer Session Setup</h3>

            {!won ? (
              <>
                <label style={{
                  display: "block",
                  fontSize: "11px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                  color: "#1a2e1a",
                  fontWeight: 700,
                }}>Your Guess (0–100):</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={guess}
                  onChange={(e) => setGuess(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && guess && checkGuess()}
                  placeholder="0–100"
                  style={{
                    width: "100%",
                    padding: "13px 14px",
                    background: "var(--cream)",
                    border: "2px solid #1a2e1a",
                    color: "#1a2e1a",
                    fontFamily: "var(--font-body)",
                    fontSize: "16px",
                    letterSpacing: "2px",
                    marginBottom: "20px",
                    outline: "none",
                  }}
                />
                <button
                  onClick={checkGuess}
                  disabled={!guess}
                  style={{
                    width: "100%",
                    padding: "14px",
                    background: "#1a2e1a",
                    color: "#f5f0e8",
                    border: "2px solid #1a2e1a",
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "3px",
                    fontFamily: "var(--font-body)",
                    textTransform: "uppercase",
                    opacity: guess ? 1 : 0.5,
                  }}
                >Submit Guess</button>
              </>
            ) : (
              <button
                onClick={() => window.location.reload()}
                style={{
                  width: "100%",
                  padding: "14px",
                  background: "#c8541a",
                  color: "#f5f0e8",
                  border: "2px solid #c8541a",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "3px",
                  fontFamily: "var(--font-body)",
                  textTransform: "uppercase",
                }}
              >Play Again</button>
            )}

            {message && (
              <p style={{
                marginTop: "20px",
                textAlign: "center",
                fontFamily: "var(--font-body)",
                fontSize: "15px",
                letterSpacing: "2px",
                color: won ? "#2d5016" : "#c8541a",
                fontWeight: 700,
                textTransform: "uppercase",
              }}>{message}</p>
            )}

            <p style={{
              marginTop: "12px",
              textAlign: "center",
              fontSize: "11px",
              letterSpacing: "2px",
              color: "#9a8e7e",
              textTransform: "uppercase",
            }}>Tries: {tries}</p>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default NumberGuess;
