import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const Button = ({ children, ...rest }) =>
  rest.to ? (
    <Link {...rest} className={styles.button}>
      {children}
    </Link>
  ) : (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );

export default Button;
