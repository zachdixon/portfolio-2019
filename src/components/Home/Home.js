import React from "react";
import styles from "./Home.module.scss";
import Fade from "react-reveal/Fade";
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
            <span>Zach</span>
            <span>Dixon</span>
            <span className={styles.dev}>.dev</span>
          </h1>
          <Fade bottom>
            <p className={styles.title}>
              Front-End Developer &bull; Dallas, TX
            </p>
          </Fade>
        </div>
      </div>
    </Page>
  );
}
