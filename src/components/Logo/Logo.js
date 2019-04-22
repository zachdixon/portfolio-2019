import React from "react";
import styles from "./Logo.module.scss";

const Logo = ({ className }) => (
  <p className={[styles.logo, className].join(" ")}>ZD</p>
);

export default Logo;
