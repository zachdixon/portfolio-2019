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
        <div className={styles.content}>
          <section>
            <header>
              <h1 className={styles.title}>Work &amp; Skills</h1>
            </header>
            <article>
              <header>
                <h2>Strengths</h2>
              </header>
              <p className={styles.skillDescription}>
                My primary language is JavaScript.
              </p>
            </article>
            <article>
              <header>
                <h2>Weaknesses</h2>
              </header>
            </article>
          </section>
        </div>
      </div>
    </Page>
  );
}
