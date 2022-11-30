import React from "react";
import styles from "./TemplateGame.module.scss";

interface iTemplateGame {
  children: JSX.Element;
}

function TemplateGame(props: iTemplateGame) {
  return <div className={styles.Template}>{props.children}</div>;
}

export default TemplateGame;
