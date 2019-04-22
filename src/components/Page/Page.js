import React from "react";
import styles from "./Page.module.scss";
import { CSSTransition } from "react-transition-group";
import { Route, Link } from "react-router-dom";
export default function Page({
  children,
  title,
  path,
  onClick = () => {},
  active,
  styles: overrideStyles = {},
  linkText,
  linkBackgroundColor = "#000",
  linkTextColor = "#fff",
  pageBackgroundColor = "#000",
  classNames = {}
}) {
  return (
    <div
      onClick={onClick}
      className={[
        styles.page,
        active ? styles.active : null,
        classNames.root
      ].join(" ")}
      style={{
        ...overrideStyles.root,
        "--linkBackgroundColor": linkBackgroundColor,
        "--pageBackgroundColor": pageBackgroundColor
      }}
    >
      <CSSTransition in={!active} timeout={600} classNames="fade-out">
        <div className={styles.pageBackground} />
      </CSSTransition>
      <div className={[styles.pageContent, classNames.content].join(" ")}>
        <Route
          path={path}
          render={props => React.cloneElement(children, props)}
          exact={true}
        />
      </div>
      <CSSTransition
        in={!active}
        timeout={300}
        classNames="fade-in-out"
        appear={true}
      >
        <Link
          to={path}
          data-text={linkText || title}
          className={[styles.pageLink, classNames.pageLink].join(" ")}
          style={{
            ...overrideStyles.pageLink,
            "--linkTextColor": linkTextColor
          }}
        >
          <p>{linkText || title}</p>
        </Link>
      </CSSTransition>
    </div>
  );
}
