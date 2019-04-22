import React from "react";
import styles from "./Blog.module.scss";
import Page from "components/Page";

export default function Blog(props) {
  return (
    <Page
      {...props}
      linkBackgroundColor={styles.linkBackgroundColor}
      linkTextColor={styles.linkTextColor}
      pageBackgroundColor={styles.pageBackgroundColor}
    >
      <div>
        <p>Blog content</p>
      </div>
    </Page>
  );
}
