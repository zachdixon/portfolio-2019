import React from "react";
import styles from "./Home.module.scss";
import Fade from "react-reveal/Fade";
import { MobileContext } from "context";
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
      <MobileContext.Consumer>
        {({ isMobile }) => (
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
                  Front-End Developer {isMobile ? null : <span>&bull; </span>}
                  Austin, TX
                </p>
              </Fade>
              {isMobile ? (
                <Fade bottom delay={600}>
                  <a
                    className={styles.btnResume}
                    href="https://docs.google.com/document/d/1_iZgYOI4K1LWM7I2LSdphjb2WIYJkAQ8OcDevZ4E87I/edit?usp=sharing"
                    rel="noopener noreferrer"
                  >
                    View my résumé
                  </a>
                </Fade>
              ) : null}
            </div>
          </div>
        )}
      </MobileContext.Consumer>
    </Page>
  );
}
