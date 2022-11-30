import React from "react";
import styles from "./Button.module.scss";

interface iButton {
  children: string | JSX.Element;
  onClick?: () => void;
  type?: "submit" | "button";
}
function Button(props: iButton) {
  return (
    <button type={props.type} className={styles.Button} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
