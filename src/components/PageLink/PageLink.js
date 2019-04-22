import React from "react";
import styles from "./PageLink.module.scss";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";

const PageLink = ({
  active,
  path,
  title = "Link",
  classNames = {},
  backgroundColor = "#000",
  textColor = "#fff",
  styles: overrideStyles = {}
}) => (
  <CSSTransition
    in={!active}
    timeout={300}
    classNames="fade-in-out"
    appear={true}
  >
    <Link
      to={path}
      data-text={title}
      className={[styles.pageLink, classNames.pageLink].join(" ")}
      style={{
        ...overrideStyles.pageLink,
        "--backgroundColor": backgroundColor,
        "--linkTextColor": textColor
      }}
    >
      <p>{title}</p>
    </Link>
  </CSSTransition>
);

export default PageLink;
