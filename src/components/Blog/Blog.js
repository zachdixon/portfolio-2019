import React from "react";
import styles from "./Blog.module.scss";
import Page from "components/Page";
import ComingSoon from "components/ComingSoon";

export default function Blog(props) {
  return (
    <Page
      {...props}
      linkBackgroundColor={styles.linkBackgroundColor}
      linkTextColor={styles.linkTextColor}
      pageBackgroundColor={styles.pageBackgroundColor}
    >
      <div className={styles.contentInner}>
        <ComingSoon
          background={[
            styles.color1,
            styles.color2,
            styles.color4,
            styles.color5
          ].join(",")}
          backgroundSize="800%"
        />
      </div>
    </Page>
  );
}
