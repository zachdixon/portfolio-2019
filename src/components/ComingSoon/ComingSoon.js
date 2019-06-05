import React from "react";
import styles from "./ComingSoon.module.scss";
import Logo from "components/Logo";

const ComingSoon = ({ background = "#000", backgroundSize }) => (
  <div className={styles.comingSoon}>
    <Logo />
    <h1
      style={{ "--background": background, "--backgroundSize": backgroundSize }}
    >
      Coming Soon
    </h1>
  </div>
);

export default ComingSoon;
