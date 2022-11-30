import React, { useEffect, useState } from "react";
import Button from "../UI/Button";
import styles from "./Game.module.scss";

function Game({ tip, word, endGame, nextWord }) {
  const [counterGame, setCounterGame] = useState(1);
  const [error, setError] = useState(0);

  const [wordSplited, setWordSplited] = useState<any>([]);
  const [letter, setLetter] = useState("");
  const [array, setArray] = useState<Array<string>>([]);

  useEffect(() => {
    setWordSplited(word.split(""));
  }, [word]);

  function handleGameForm(e) {
    e.preventDefault();

    const currentLetter = letter.toUpperCase();

    if (array.includes(currentLetter)) {
      setError(error + 1);
    } else {
      !wordSplited.includes(currentLetter)
        ? setError(error + 1)
        : setCounterGame(counterGame + 1);
      array.push(letter.toUpperCase());
      setArray(array);
    }

    setLetter("");

    const arraySort = [...new Set(wordSplited)];

    arraySort.length === counterGame && newWordGame();

    error >= 5 && endGame();
  }

  function newWordGame() {
    setWordSplited(word.split(""));
    setCounterGame(1);
    setError(0);
    setArray([]);
    nextWord();
  }

  return (
    <div className={styles.Game}>
      <h1 className={styles.titleGame}>DICA: {tip}</h1>
      <div className={styles.WordBox}>
        {wordSplited.map((element: string) => {
          return array.includes(element) ? <h1>{element}</h1> : <h1>x</h1>;
        })}
      </div>
      <form onSubmit={handleGameForm} className={styles.formGame}>
        <input
          type="text"
          autoFocus
          value={letter}
          onChange={(e) => setLetter(e.target.value)}
          required
          maxLength={1}
        />
        <Button>Revelar</Button>
      </form>
      <div className={styles.boxLetters}>
        {array.map((element) => (
          <p style={{ margin: "4%" }}>{element}</p>
        ))}
        <br />
      </div>
      <div>Erros: {error}</div>
    </div>
  );
}

export default Game;
