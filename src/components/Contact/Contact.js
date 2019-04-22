import React from "react";
import styles from "./Contact.module.scss";
import Page from "components/Page";

export default function Contact(props) {
  return (
    <Page
      {...props}
      linkBackgroundColor={styles.linkBackgroundColor}
      linkTextColor={styles.linkTextColor}
      pageBackgroundColor={styles.pageBackgroundColor}
    >
      <div>
        <p>Contact content</p>
      </div>
    </Page>
  );
}
