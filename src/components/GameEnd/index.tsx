import React from "react";
import Button from "../UI/Button";
import styles from "./GameEnd.module.scss";

interface iGameEnd {
  onClickRestart: () => void;
  onClickStart: () => void;
}

function GameEnd(props: iGameEnd) {
  return (
    <div className={styles.GameEnd}>
      <h1>Game Over!</h1>
      <div className={styles.actionButtons}>
        <Button onClick={props.onClickRestart}>Recomeçar</Button>
        <Button onClick={props.onClickStart}>Inicio</Button>
      </div>
    </div>
  );
}

export default GameEnd;
