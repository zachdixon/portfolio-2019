import React from "react";
import styles from "./Home.module.scss";
import Page from "components/Page";
import Logo from "components/Logo";

export default function Home(props) {
  return (
    <Page
      {...props}
      linkBackgroundColor={styles.linkBackgroundColor}
      pageBackgroundColor={styles.pageBackgroundColor}
      linkText={"ZD"}
      styles={{ pageLink: { fontFamily: "Permanent Marker" } }}
    >
      <div className={styles.contentInner}>
        <div className={styles.hero}>
          <Logo className={styles.logo} />

          <h1>
            Zach
            <br />
            Dixon
            <br />
            <span>.dev</span>
          </h1>
        </div>
      </div>
    </Page>
  );
}
