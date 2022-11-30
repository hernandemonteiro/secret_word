import React from "react";
import Button from "../UI/Button";
import styles from "./StartGame.module.scss";

function StartGame({ onClickStart }) {
  return (
    <div className={styles.StartGame}>
      <h1>StartGame - Secret Word</h1>
      <p>Clique no botão abaixo para começar jogar!</p>
      <Button onClick={onClickStart}>COMEÇAR JOGO</Button>
    </div>
  );
}

export default StartGame;
