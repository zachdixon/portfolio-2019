import React from "react";
import styles from "./About.module.scss";
import Page from "components/Page";

export default function About(props) {
  return (
    <Page
      {...props}
      linkBackgroundColor={styles.linkBackgroundColor}
      linkTextColor={styles.linkTextColor}
      pageBackgroundColor={styles.pageBackgroundColor}
    >
      <div className={styles.contentInner}>
        <p>About content</p>
      </div>
    </Page>
  );
}
