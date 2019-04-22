import React from "react";
import styles from "./Work.module.scss";
import Page from "components/Page";

export default function Work(props) {
  return (
    <Page
      {...props}
      linkBackgroundColor={styles.linkBackgroundColor}
      linkTextColor={styles.linkTextColor}
      pageBackgroundColor={styles.pageBackgroundColor}
    >
      <div>
        <p>Work content</p>
      </div>
    </Page>
  );
}
