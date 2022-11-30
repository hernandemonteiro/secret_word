import React, { useState } from "react";
import Game from "../../components/Game";
import GameEnd from "../../components/GameEnd";
import StartGame from "../../components/StartGame";
import TemplateGame from "../../components/TemplateGame";
import wordsList from "../../data/words";

function App() {
  type GameMode = "Game" | "End" | "Start";
  const [gameMode, setGameMode] = useState<GameMode>("Start");

  const [word, setWord] = useState("");
  const [category, setCategory] = useState("");

  function pickWordAndCategory() {
    const categories = Object.keys(wordsList);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    const word =
      wordsList[category][
        Math.floor(Math.random() * wordsList[category].length)
      ];

    setCategory(category);
    setWord(word);
  }

  function startGame() {
    pickWordAndCategory();
    setGameMode("Game");
  }

  return (
    <TemplateGame>
      <>
        {gameMode === "Start" && <StartGame onClickStart={startGame} />}
        {gameMode === "Game" && (
          <Game
            tip={category}
            word={word.toUpperCase()}
            endGame={() => {
              setGameMode("End");
            }}
            nextWord={pickWordAndCategory}
          />
        )}
        {gameMode === "End" && (
          <GameEnd
            onClickRestart={startGame}
            onClickStart={() => setGameMode("Start")}
          />
        )}
      </>
    </TemplateGame>
  );
}

export default App;
