import { useState } from "react";

function RockPaperScissors() {
  const [result, setResult] = useState("");

  const play = (user) => {
    const choices = ["Rock", "Paper", "Scissors"];

    const computer =
      choices[Math.floor(Math.random() * 3)];

    if (user === computer) {
      setResult(`Draw (${computer})`);
    } else if (
      (user === "Rock" && computer === "Scissors") ||
      (user === "Paper" && computer === "Rock") ||
      (user === "Scissors" && computer === "Paper")
    ) {
      setResult(`You Win (${computer})`);
    } else {
      setResult(`You Lose (${computer})`);
    }
  };

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h1>Rock Paper Scissors</h1>

      <button onClick={() => play("Rock")}>Rock</button>

      <button onClick={() => play("Paper")}>Paper</button>

      <button onClick={() => play("Scissors")}>Scissors</button>

      <h2>{result}</h2>
    </div>
  );
}

export default RockPaperScissors;